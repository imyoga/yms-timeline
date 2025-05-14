import { ThemeProvider } from './theme/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

/**
 * Main application component that sets up the router
 *
 * @returns {JSX.Element} App component with router
 */
export const App = () => {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}
