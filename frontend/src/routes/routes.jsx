import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'
import { AppLayout } from '../layouts/AppLayout'
import { NAVIGATION, extractRoutes } from './navigation'

/**
 * Application route configuration
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
			...extractRoutes(),
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

// Re-export navigation for convenience
export { NAVIGATION }
