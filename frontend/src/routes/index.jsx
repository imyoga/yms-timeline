import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Timeline } from '../pages/Timeline'
import { Pages } from '../pages/Pages'
import { Layers } from '../pages/Layers'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
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
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/timeline',
				element: <Timeline />,
			},
			{
				path: '/pages',
				element: <Pages />,
			},
			{
				path: '/layers',
				element: <Layers />,
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
				element: <NotFound />,
			},
		],
	},
]

/**
 * Browser router instance
 */
export const router = createBrowserRouter(routes)
