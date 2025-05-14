/**
 * Typography configuration for the MUI theme
 * Defines font families, sizes, weights, and styles for different text elements
 *
 * @example
 * import { typography } from '../theme/typography';
 * // Use typography.h1 to access h1 typography styles
 */

export const typography = {
	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	fontSize: 14,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 700,
	h1: {
		fontWeight: 700,
		fontSize: '2.5rem',
		lineHeight: 1.2,
		letterSpacing: '-0.01562em',
	},
	h2: {
		fontWeight: 700,
		fontSize: '2rem',
		lineHeight: 1.2,
		letterSpacing: '-0.00833em',
	},
	h3: {
		fontWeight: 600,
		fontSize: '1.75rem',
		lineHeight: 1.2,
		letterSpacing: '0em',
	},
	h4: {
		fontWeight: 600,
		fontSize: '1.5rem',
		lineHeight: 1.2,
		letterSpacing: '0.00735em',
	},
	h5: {
		fontWeight: 500,
		fontSize: '1.25rem',
		lineHeight: 1.2,
		letterSpacing: '0em',
	},
	h6: {
		fontWeight: 500,
		fontSize: '1rem',
		lineHeight: 1.2,
		letterSpacing: '0.0075em',
	},
	subtitle1: {
		fontSize: '1rem',
		lineHeight: 1.75,
		letterSpacing: '0.00938em',
	},
	subtitle2: {
		fontWeight: 500,
		fontSize: '0.875rem',
		lineHeight: 1.57,
		letterSpacing: '0.00714em',
	},
	body1: {
		fontSize: '1rem',
		lineHeight: 1.5,
		letterSpacing: '0.00938em',
	},
	body2: {
		fontSize: '0.875rem',
		lineHeight: 1.43,
		letterSpacing: '0.01071em',
	},
	button: {
		fontWeight: 500,
		fontSize: '0.875rem',
		lineHeight: 1.75,
		letterSpacing: '0.02857em',
		textTransform: 'uppercase',
	},
	caption: {
		fontSize: '0.75rem',
		lineHeight: 1.66,
		letterSpacing: '0.03333em',
	},
	overline: {
		fontWeight: 500,
		fontSize: '0.75rem',
		lineHeight: 2.66,
		letterSpacing: '0.08333em',
		textTransform: 'uppercase',
	},
}
