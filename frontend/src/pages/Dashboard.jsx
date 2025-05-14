import { Box, Typography } from '@mui/material'

/**
 * Dashboard page component
 *
 * @returns {JSX.Element} Dashboard component
 * @example
 * <Dashboard />
 */
export const Dashboard = () => {
	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='body1'>
				Welcome to the YMS Timeline dashboard. This is your main overview page.
			</Typography>
		</Box>
	)
}
