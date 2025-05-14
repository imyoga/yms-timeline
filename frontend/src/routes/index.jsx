import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Pages } from '../pages/Pages'
import { Layers } from '../pages/Layers'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
import { AppLayout } from '../layouts/AppLayout'

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
