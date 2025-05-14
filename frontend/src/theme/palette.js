/**
 * Color palette configuration for the MUI theme
 * Defines primary, secondary, error, warning, info, success, grey, and common colors
 */

// Primary color palette
const primary = {
	main: '#1976d2',
	light: '#42a5f5',
	dark: '#1565c0',
	contrastText: '#fff',
}

// Secondary color palette
const secondary = {
	main: '#9c27b0',
	light: '#ba68c8',
	dark: '#7b1fa2',
	contrastText: '#fff',
}

// Error color palette
const error = {
	main: '#d32f2f',
	light: '#ef5350',
	dark: '#c62828',
	contrastText: '#fff',
}

// Warning color palette
const warning = {
	main: '#ed6c02',
	light: '#ff9800',
	dark: '#e65100',
	contrastText: '#fff',
}

// Info color palette
const info = {
	main: '#0288d1',
	light: '#03a9f4',
	dark: '#01579b',
	contrastText: '#fff',
}

// Success color palette
const success = {
	main: '#2e7d32',
	light: '#4caf50',
	dark: '#1b5e20',
	contrastText: '#fff',
}

// Grey color palette
const grey = {
	50: '#fafafa',
	100: '#f5f5f5',
	200: '#eeeeee',
	300: '#e0e0e0',
	400: '#bdbdbd',
	500: '#9e9e9e',
	600: '#757575',
	700: '#616161',
	800: '#424242',
	900: '#212121',
}

// Common colors
const common = {
	black: '#000',
	white: '#fff',
}

// Text colors
const text = {
	primary: 'rgba(0, 0, 0, 0.87)',
	secondary: 'rgba(0, 0, 0, 0.6)',
	disabled: 'rgba(0, 0, 0, 0.38)',
}

// Background colors
const background = {
	paper: '#fff',
	default: '#f5f5f5',
}

// Divider color
const divider = 'rgba(0, 0, 0, 0.12)'

/**
 * Complete palette configuration
 * @example
 * import { palette } from '../theme/palette';
 * // Use palette.primary.main to access primary color
 */
export const palette = {
	primary,
	secondary,
	error,
	warning,
	info,
	success,
	grey,
	common,
	text,
	background,
	divider,
	contrastThreshold: 3,
	tonalOffset: 0.2,
}
