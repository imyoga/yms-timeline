import { Typography, Box, Grid, Paper, Divider } from '@mui/material'

import { shadows } from '../../theme/shadows'

/**
 * Shadows component that showcases all shadow elevations
 * @returns {JSX.Element} A component displaying shadow elements
 * @example
 * <ShadowsShowcase />
 */
export const ShadowsShowcase = () => {
	return (
		<Box sx={{ m: 0, p: 0 }}>
			<Typography variant='h4' gutterBottom>
				Shadows
			</Typography>
			<Divider sx={{ mb: 3 }} />

			<Grid container spacing={2}>
				{shadows.map(
					(shadow, index) =>
						index > 0 && (
							<Grid item xs={12} sm={6} md={3} key={index}>
								<Box
									sx={{
										p: 3,
										height: 100,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										boxShadow: index,
										borderRadius: 1,
										mb: 2,
									}}
								>
									<Typography>Shadow {index}</Typography>
								</Box>
							</Grid>
						)
				)}
			</Grid>
		</Box>
	)
}
