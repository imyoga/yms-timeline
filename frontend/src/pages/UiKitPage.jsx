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
		<Box sx={{ p: 3 }}>
			<Typography variant='h4' gutterBottom>
				UI Components
			</Typography>
			<Typography variant='body1' paragraph>
				This page showcases the theme system and UI components used in the
				application.
			</Typography>
			<UiKit />
		</Box>
	)
}
