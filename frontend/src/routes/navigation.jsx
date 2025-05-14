import { Dashboard } from '../pages/Dashboard'
import { Pages } from '../pages/Pages'
import { Layers } from '../pages/Layers'
import { Settings } from '../pages/Settings'
import { UiKitPage } from '../pages/UiKitPage'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import LayersIcon from '@mui/icons-material/Layers'
import DescriptionIcon from '@mui/icons-material/Description'
import PaletteIcon from '@mui/icons-material/Palette'

/**
 * Application navigation configuration
 * Single source of truth for navigation items
 */
export const NAVIGATION = [
	{
		kind: 'header',
		title: 'Main',
	},
	{
		segment: 'dashboard',
		title: 'Dashboard',
		icon: <DashboardIcon />,
		path: '/dashboard',
		element: <Dashboard />,
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
		path: '/pages',
		element: <Pages />,
	},
	{
		segment: 'layers',
		title: 'Layers',
		icon: <LayersIcon />,
		path: '/layers',
		element: <Layers />,
	},
	{
		segment: 'ui-kit',
		title: 'UI Kit',
		icon: <PaletteIcon />,
		path: '/ui-kit',
		element: <UiKitPage />,
	},
	{
		kind: 'divider',
	},
	{
		segment: 'settings',
		title: 'Settings',
		icon: <SettingsIcon />,
		path: '/settings',
		element: <Settings />,
	},
]

/**
 * Extract routes from navigation configuration
 */
export const extractRoutes = () => {
	return NAVIGATION.filter((item) => item.path && item.element).map(
		({ path, element }) => ({ path, element })
	)
}
