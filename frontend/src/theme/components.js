/**
 * Component overrides for the MUI theme
 * Customizes the default styles of MUI components
 *
 * @example
 * import { components } from '../theme/components';
 * // Use components.MuiButton to access Button component overrides
 */

export const components = {
	// Global style override for all components
	MuiCssBaseline: {
		styleOverrides: {
			'*': {
				boxSizing: 'border-box',
			},
			html: {
				margin: 0,
				padding: 0,
				width: '100%',
				height: '100%',
				WebkitOverflowScrolling: 'touch',
			},
			body: {
				margin: 0,
				padding: 0,
				width: '100%',
				height: '100%',
			},
			'#root': {
				width: '100%',
				height: '100%',
			},
			input: {
				'&[type=number]': {
					MozAppearance: 'textfield',
					'&::-webkit-outer-spin-button': {
						margin: 0,
						WebkitAppearance: 'none',
					},
					'&::-webkit-inner-spin-button': {
						margin: 0,
						WebkitAppearance: 'none',
					},
				},
			},
			img: {
				maxWidth: '100%',
				display: 'inline-block',
				verticalAlign: 'bottom',
			},
		},
	},
	MuiBox: {
		styleOverrides: {
			root: {
				padding: '0 !important',
				margin: '0 !important',
				'&.MuiBox-root': {
					margin: '0 !important',
					padding: '0 !important',
				},
			},
		},
		defaultProps: {
			sx: {
				m: 0,
				p: 0,
			},
		},
	},
	MuiContainer: {
		styleOverrides: {
			root: {
				padding: 0,
				margin: 0,
			},
		},
	},
	MuiStack: {
		styleOverrides: {
			root: {
				padding: '0 !important',
				margin: '0 !important',
				'&.MuiStack-root': {
					margin: '0 !important',
					padding: '0 !important',
				},
			},
		},
		defaultProps: {
			sx: {
				m: 0,
				p: 0,
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 8,
				textTransform: 'none',
				fontWeight: 500,
			},
			contained: {
				boxShadow: 'none',
				'&:hover': {
					boxShadow: 'none',
				},
			},
			sizeSmall: {
				padding: '6px 16px',
			},
			sizeMedium: {
				padding: '8px 20px',
			},
			sizeLarge: {
				padding: '11px 24px',
			},
			textSizeSmall: {
				padding: '7px 12px',
			},
			textSizeMedium: {
				padding: '9px 16px',
			},
			textSizeLarge: {
				padding: '12px 16px',
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				borderRadius: 8,
				boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	MuiCardContent: {
		styleOverrides: {
			root: {
				padding: '24px',
				'&:last-child': {
					paddingBottom: '24px',
				},
			},
		},
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: {
				variant: 'h6',
			},
			subheaderTypographyProps: {
				variant: 'body2',
			},
		},
		styleOverrides: {
			root: {
				padding: '16px 24px',
			},
		},
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				'& .MuiInputBase-root': {
					borderRadius: 8,
				},
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				borderRadius: 8,
			},
		},
	},
	MuiAppBar: {
		styleOverrides: {
			root: {
				boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	MuiTableHead: {
		styleOverrides: {
			root: {
				backgroundColor: 'rgba(0, 0, 0, 0.02)',
				'& .MuiTableCell-root': {
					fontWeight: 600,
				},
			},
		},
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				padding: '16px',
				borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
			},
		},
	},
	MuiTab: {
		styleOverrides: {
			root: {
				textTransform: 'none',
				fontWeight: 500,
				minWidth: 'auto',
			},
		},
	},
}
