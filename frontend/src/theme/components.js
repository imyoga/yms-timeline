/**
 * Component overrides for the MUI theme
 * Customizes the default styles of MUI components
 *
 * @example
 * import { components } from '../theme/components';
 * // Use components.MuiButton to access Button component overrides
 */

export const components = {
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
