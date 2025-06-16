import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "../theme";
import { AppProvider, DashboardLayout, PageContainer } from "@toolpad/core";
import { NAVIGATION } from "./navigation";

/**
 * Main application layout that integrates React Router with Toolpad Core
 *
 * @returns {JSX.Element} AppLayout component
 * @example
 * <AppLayout />
 */
export const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Create Toolpad router object from React Router
  const toolpadRouter = {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path),
  };

  // Sync Toolpad navigation with React Router
  useEffect(() => {
    // Handle initial redirect if needed
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <ThemeProvider>
      <AppProvider
        navigation={NAVIGATION}
        router={toolpadRouter}
        branding={{
          title: "YMS Timeline",
          homeUrl: "/dashboard",
          logo: <img src="/logo/logo.png" alt="YMS Timeline" height="32" />,
        }}
      >
        <DashboardLayout defaultSidebarCollapsed>
          <PageContainer
            breadcrumbs={[]}
            maxWidth={false}
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            <Outlet />
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
};
