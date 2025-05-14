import { ThemeProvider } from './theme/index.jsx'
import { Container } from '@mui/material'
import { ThemeSystem } from './components/ThemeSystem'
import { AppProvider, DashboardLayout, PageContainer } from '@toolpad/core'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import LayersIcon from '@mui/icons-material/Layers'
import DescriptionIcon from '@mui/icons-material/Description'
import { useState, useMemo } from 'react'

export const App = () => {
	const [pathname, setPathname] = useState('/dashboard')

	const router = useMemo(() => {
		return {
			pathname,
			searchParams: new URLSearchParams(),
			navigate: (path) => setPathname(String(path)),
		}
	}, [pathname])

	const NAVIGATION = [
		{
			kind: 'header',
			title: 'Main',
		},
		{
			segment: 'dashboard',
			title: 'Dashboard',
			icon: <DashboardIcon />,
		},
		{
			kind: 'divider',
		},
		{
			kind: 'header',
			title: 'Content',
		},
		{
			segment: 'pages',
			title: 'Pages',
			icon: <DescriptionIcon />,
		},
		{
			segment: 'layers',
			title: 'Layers',
			icon: <LayersIcon />,
		},
		{
			kind: 'divider',
		},
		{
			segment: 'settings',
			title: 'Settings',
			icon: <SettingsIcon />,
		},
	]

	return (
		<ThemeProvider>
			<AppProvider
				navigation={NAVIGATION}
				router={router}
				branding={{
					title: 'YMS Timeline',
					homeUrl: '/dashboard',
				}}
			>
				<DashboardLayout>
					<PageContainer>
						<ThemeSystem />
					</PageContainer>
				</DashboardLayout>
			</AppProvider>
		</ThemeProvider>
	)
}
