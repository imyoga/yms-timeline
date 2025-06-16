import { Typography, Box, Alert, Stack, Divider } from '@mui/material'

/**
 * Alerts component that showcases all alert variants
 * @returns {JSX.Element} A component displaying alert elements
 * @example
 * <AlertsShowcase />
 */
export const AlertsShowcase = () => {
	return (
		<Box sx={{ m: 0, p: 0 }}>
			<Typography variant='h4' gutterBottom>
				Alerts & Feedback
			</Typography>
			<Divider sx={{ mb: 3 }} />

			<Typography variant='h6' gutterBottom>
				Alerts
			</Typography>
			<Stack spacing={2} sx={{ mb: 4 }}>
				<Alert severity='success'>Success alert — This is a success message!</Alert>
				<Alert severity='info'>Info alert — This is an information message!</Alert>
				<Alert severity='warning'>Warning alert — This is a warning message!</Alert>
				<Alert severity='error'>Error alert — This is an error message!</Alert>
			</Stack>

			<Typography variant='h6' gutterBottom>
				Outlined Alerts
			</Typography>
			<Stack spacing={2} sx={{ mb: 4 }}>
				<Alert severity='success' variant='outlined'>
					Success alert — This is a success message!
				</Alert>
				<Alert severity='info' variant='outlined'>
					Info alert — This is an information message!
				</Alert>
				<Alert severity='warning' variant='outlined'>
					Warning alert — This is a warning message!
				</Alert>
				<Alert severity='error' variant='outlined'>
					Error alert — This is an error message!
				</Alert>
			</Stack>

			<Typography variant='h6' gutterBottom>
				Filled Alerts
			</Typography>
			<Stack spacing={2} sx={{ mb: 4 }}>
				<Alert severity='success' variant='filled'>
					Success alert — This is a success message!
				</Alert>
				<Alert severity='info' variant='filled'>
					Info alert — This is an information message!
				</Alert>
				<Alert severity='warning' variant='filled'>
					Warning alert — This is a warning message!
				</Alert>
				<Alert severity='error' variant='filled'>
					Error alert — This is an error message!
				</Alert>
			</Stack>
		</Box>
	)
}
