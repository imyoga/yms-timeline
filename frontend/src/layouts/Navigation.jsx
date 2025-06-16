import { DashboardPage } from "../pages/DashboardPage";
import { TimelinePage } from "../pages/TimelinePage";
import { SettingsPage } from "../pages/SettingsPage";
import { UiKitPage } from "../pages/UiKitPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import SettingsIcon from "@mui/icons-material/Settings";
import PaletteIcon from "@mui/icons-material/Palette";
import LogoutIcon from "@mui/icons-material/Logout";

/**
 * Application navigation configuration
 * Single source of truth for navigation items
 */
export const NAVIGATION = [
  {
    kind: "header",
    title: "Main",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Content",
  },
  {
    segment: "timeline",
    title: "Timeline",
    icon: <TimelineIcon />,
    path: "/timeline",
    element: <TimelinePage />,
  },
  {
    segment: "ui-kit",
    title: "UI Kit",
    icon: <PaletteIcon />,
    path: "/ui-kit",
    element: <UiKitPage />,
  },
  {
    kind: "header",
    title: "Settings",
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    segment: "logout",
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/logout",
  },
];

/**
 * Extract routes from navigation configuration
 */
export const extractRoutes = () => {
  return NAVIGATION.filter((item) => item.path && item.element).map(
    ({ path, element }) => ({ path, element })
  );
};
