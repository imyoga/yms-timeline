import { Typography, Box, Grid, Divider, Paper } from '@mui/material'

/**
 * Typography component that showcases all typography variants with their specifications
 * @returns {JSX.Element} A component displaying typography elements in a single column
 * @example
 * <TypographyShowcase />
 */
export const TypographyShowcase = () => {
	return (
		<Box sx={{ mb: 6 }}>
			<Typography variant='h4' gutterBottom>
				Typography
			</Typography>
			<Divider sx={{ mb: 3 }} />

			{/* Headings */}
			<Typography variant='h6' sx={{ mb: 2 }}>
				Headings
			</Typography>
			<Paper elevation={0} variant='outlined' sx={{ p: 3, mb: 4 }}>
				<Box>
					{/* H1 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h1' sx={{ mr: 2 }}>
								h1. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 700, fontSize: 2.5rem, lineHeight: 1.2
							</Typography>
						</Box>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* H2 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h2' sx={{ mr: 2 }}>
								h2. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 700, fontSize: 2rem, lineHeight: 1.2
							</Typography>
						</Box>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* H3 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h3' sx={{ mr: 2 }}>
								h3. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 600, fontSize: 1.75rem, lineHeight: 1.2
							</Typography>
						</Box>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* H4 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h4' sx={{ mr: 2 }}>
								h4. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 600, fontSize: 1.5rem, lineHeight: 1.2
							</Typography>
						</Box>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* H5 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h5' sx={{ mr: 2 }}>
								h5. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 500, fontSize: 1.25rem, lineHeight: 1.2
							</Typography>
						</Box>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* H6 */}
					<Box sx={{ mb: 3 }}>
						<Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
							<Typography variant='h6' sx={{ mr: 2 }}>
								h6. Heading
							</Typography>
							<Typography variant='caption' color='text.secondary'>
								fontWeight: 500, fontSize: 1rem, lineHeight: 1.2
							</Typography>
						</Box>
					</Box>
				</Box>
			</Paper>

			{/* Text styles */}
			<Typography variant='h6' sx={{ mb: 2 }}>
				Text Styles
			</Typography>
			<Paper elevation={0} variant='outlined' sx={{ p: 3, mb: 4 }}>
				<Box>
					{/* Subtitle1 */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='subtitle1' gutterBottom>
							subtitle1. Lorem ipsum dolor sit amet
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontSize: 1rem, lineHeight: 1.75
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Subtitle2 */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='subtitle2' gutterBottom>
							subtitle2. Lorem ipsum dolor sit amet
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontWeight: 500, fontSize: 0.875rem, lineHeight: 1.57
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Body1 */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='body1' gutterBottom>
							body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam eu turpis molestie, dictum est a, mattis tellus.
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontSize: 1rem, lineHeight: 1.5
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Body2 */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='body2' gutterBottom>
							body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam eu turpis molestie, dictum est a, mattis tellus.
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontSize: 0.875rem, lineHeight: 1.43
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Button */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='button' display='block' gutterBottom>
							BUTTON TEXT
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontWeight: 500, fontSize: 0.875rem, lineHeight: 1.75,
							textTransform: uppercase
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Caption */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='caption' display='block' gutterBottom>
							caption text
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontSize: 0.75rem, lineHeight: 1.66
						</Typography>
						<Divider sx={{ mt: 1 }} />
					</Box>

					{/* Overline */}
					<Box sx={{ mb: 3 }}>
						<Typography variant='overline' display='block' gutterBottom>
							OVERLINE TEXT
						</Typography>
						<Typography
							variant='caption'
							color='text.secondary'
							display='block'
						>
							fontWeight: 500, fontSize: 0.75rem, lineHeight: 2.66,
							textTransform: uppercase
						</Typography>
					</Box>
				</Box>
			</Paper>
		</Box>
	)
}
