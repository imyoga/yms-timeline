import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '../theme'
import { AppProvider, DashboardLayout, PageContainer } from '@toolpad/core'
import Box from '@mui/material/Box'
import { NAVIGATION } from '../routes/navigation'

/**
 * Main application layout that integrates React Router with Toolpad Core
 *
 * @returns {JSX.Element} AppLayout component
 * @example
 * <AppLayout />
 */
export const AppLayout = () => {
	const location = useLocation()
	const navigate = useNavigate()

	// Create Toolpad router object from React Router
	const toolpadRouter = {
		pathname: location.pathname,
		searchParams: new URLSearchParams(location.search),
		navigate: (path) => navigate(path),
	}

	// Sync Toolpad navigation with React Router
	useEffect(() => {
		// Handle initial redirect if needed
		if (location.pathname === '/') {
			navigate('/dashboard')
		}
	}, [location.pathname, navigate])

	return (
		<ThemeProvider>
			<AppProvider
				navigation={NAVIGATION}
				router={toolpadRouter}
				branding={{
					title: 'YMS Timeline',
					homeUrl: '/dashboard',
				}}
			>
				<DashboardLayout
					defaultSidebarCollapsed
					sx={{
						border: '2px solid blue',
						padding: 0,
					}}
				>
					<PageContainer
						title=''
						breadcrumbs={[]}
						maxWidth={false}
						disableGutters
						sx={{
							border: '2px solid green',
							width: '100%',
							padding: 0,
							margin: 0,
							'& > .MuiBox-root, & > .MuiStack-root': {
								margin: '0 !important',
								padding: '0 !important',
							},
							'& .MuiBox-root, & .MuiStack-root': {
								marginTop: '0 !important',
								marginBottom: '0 !important',
							},
						}}
						id='page-container'
					>
						<Outlet id='page-outlet' />
					</PageContainer>
				</DashboardLayout>
			</AppProvider>
		</ThemeProvider>
	)
}
