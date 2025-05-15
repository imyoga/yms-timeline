import { Box, Typography } from '@mui/material'
import { UiKit } from '../components/UIKit'

/**
 * UI page component that showcases theme system and UI components
 *
 * @returns {JSX.Element} UI component
 * @example
 * <UI />
 */
export const UiKitPage = () => {
	return (
		<Box sx={{ border: '1px solid red', m: 0, p: 0 }}>
			<Typography variant='body1'>
				This page showcases the theme system and UI components used in the
				application.
			</Typography>
			<UiKit />
		</Box>
	)
}
