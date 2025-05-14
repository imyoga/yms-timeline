import { Box, Typography, Card, CardContent, Grid } from '@mui/material'

/**
 * Pages management component
 *
 * @returns {JSX.Element} Pages component
 * @example
 * <Pages />
 */
export const Pages = () => {
	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='body1' sx={{ mb: 3 }}>
				Manage your content pages here.
			</Typography>

			<Grid container spacing={3}>
				{[1, 2, 3].map((item) => (
					<Grid item xs={12} md={4} key={item}>
						<Card>
							<CardContent>
								<Typography variant='h6'>Page {item}</Typography>
								<Typography variant='body2' color='text.secondary'>
									Sample page content description
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
