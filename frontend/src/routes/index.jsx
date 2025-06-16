import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { TimelinePage } from '../pages/TimelinePage'
import { Pages } from '../pages'
import { LayersPage } from '../pages/LayersPage'
import { Settings } from '../pages/Settings'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AppLayout } from '../layouts/AppLayout'
import { UiKitPage } from '../pages/UiKitPage'
/**
 * Application route configuration
 *
 * @type {import('react-router-dom').RouteObject[]}
 */
export const routes = [
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <DashboardPage />,
			},
			{
				path: '/dashboard',
				element: <DashboardPage />,
			},
			{
				path: '/timeline',
				element: <TimelinePage />,
			},
			{
				path: '/pages',
				element: <Pages />,
			},
			{
				path: '/layers',
				element: <LayersPage />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
			{
				path: '/ui-kit',
				element: <UiKitPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]

/**
 * Browser router instance
 */
export const router = createBrowserRouter(routes)
