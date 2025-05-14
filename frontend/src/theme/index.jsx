/**
 * Main theme configuration for the application
 * Exports the theme object and ThemeProvider component
 *
 * @example
 * import { theme, ThemeProvider } from './theme';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 */

import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { palette } from './palette'
import { typography } from './typography'
import { shadows } from './shadows'
import { breakpoints } from './breakpoints'
import { components } from './components'

/**
 * Custom theme object created using MUI's createTheme function
 * Combines all theme configurations (palette, typography, etc.)
 */
export const theme = createTheme({
	palette,
	typography,
	shadows,
	breakpoints,
	components,
	shape: {
		borderRadius: 8,
	},
	mixins: {
		toolbar: {
			minHeight: 64,
		},
	},
})

/**
 * ThemeProvider component that wraps the application with the theme
 * Also includes CssBaseline for consistent styling across browsers
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped with the theme
 * @returns {React.ReactElement} ThemeProvider component
 */
export function ThemeProvider({ children }) {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	)
}
