import { Typography, Box, Grid, Divider } from '@mui/material'
import { palette } from '../../theme/palette'

/**
 * Colors component that showcases all color variants with their hex values
 * @returns {JSX.Element} A component displaying color elements
 * @example
 * <ColorsShowcase />
 */
export const ColorsShowcase = () => {
	return (
		<Box sx={{ mb: 6 }}>
			<Typography variant='h4' gutterBottom>
				Colors
			</Typography>
			<Divider sx={{ mb: 3 }} />

			<Typography variant='h6' gutterBottom>
				Primary Colors
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'primary.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							primary.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.primary.main}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'primary.light', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							primary.light
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.primary.light}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'primary.dark', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							primary.dark
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.primary.dark}
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Typography variant='h6' gutterBottom>
				Secondary Colors
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'secondary.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							secondary.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.secondary.main}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'secondary.light', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							secondary.light
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.secondary.light}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'secondary.dark', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							secondary.dark
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.secondary.dark}
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Typography variant='h6' gutterBottom>
				Status Colors
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'success.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							success.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.success.main}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'error.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							error.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.error.main}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'warning.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							warning.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.warning.main}
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Box sx={{ bgcolor: 'info.main', p: 3, borderRadius: 1 }}>
						<Typography variant='subtitle2' sx={{ color: 'white' }}>
							info.main
						</Typography>
						<Typography variant='caption' sx={{ color: 'white' }}>
							{palette.info.main}
						</Typography>
					</Box>
				</Grid>
			</Grid>

			<Typography variant='h6' gutterBottom>
				Grey Scale
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				{Object.entries(palette.grey).map(([key, value]) => (
					<Grid item xs={6} sm={3} md={2} key={key}>
						<Box sx={{ bgcolor: `grey.${key}`, p: 3, borderRadius: 1 }}>
							<Typography
								variant='subtitle2'
								sx={{ color: Number(key) > 500 ? 'white' : 'black' }}
							>
								grey.{key}
							</Typography>
							<Typography
								variant='caption'
								sx={{ color: Number(key) > 500 ? 'white' : 'black' }}
							>
								{value}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>

			<Typography variant='h6' gutterBottom>
				Text Colors
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={12} sm={4}>
					<Box
						sx={{
							p: 2,
							border: '1px solid',
							borderColor: 'divider',
							borderRadius: 1,
						}}
					>
						<Typography color='text.primary'>text.primary</Typography>
						<Typography variant='caption'>{palette.text.primary}</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Box
						sx={{
							p: 2,
							border: '1px solid',
							borderColor: 'divider',
							borderRadius: 1,
						}}
					>
						<Typography color='text.secondary'>text.secondary</Typography>
						<Typography variant='caption'>{palette.text.secondary}</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Box
						sx={{
							p: 2,
							border: '1px solid',
							borderColor: 'divider',
							borderRadius: 1,
						}}
					>
						<Typography color='text.disabled'>text.disabled</Typography>
						<Typography variant='caption'>{palette.text.disabled}</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}
