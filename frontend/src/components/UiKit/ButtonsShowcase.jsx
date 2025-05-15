import { Typography, Box, Button, Grid, Stack, Divider } from '@mui/material'

/**
 * Buttons component that showcases all button variants
 * @returns {JSX.Element} A component displaying button elements
 * @example
 * <ButtonsShowcase />
 */
export const ButtonsShowcase = () => {
	return (
		<Box sx={{ m: 0, p: 0 }}>
			<Typography variant='h4' gutterBottom>
				Buttons
			</Typography>
			<Divider sx={{ mb: 3 }} />

			<Typography variant='h6' gutterBottom>
				Contained Buttons
			</Typography>
			<Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
				<Button variant='contained' color='primary'>
					Primary
				</Button>
				<Button variant='contained' color='secondary'>
					Secondary
				</Button>
				<Button variant='contained' color='error'>
					Error
				</Button>
				<Button variant='contained' color='warning'>
					Warning
				</Button>
				<Button variant='contained' color='info'>
					Info
				</Button>
				<Button variant='contained' color='success'>
					Success
				</Button>
				<Button variant='contained' disabled>
					Disabled
				</Button>
			</Box>

			<Typography variant='h6' gutterBottom>
				Outlined Buttons
			</Typography>
			<Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
				<Button variant='outlined' color='primary'>
					Primary
				</Button>
				<Button variant='outlined' color='secondary'>
					Secondary
				</Button>
				<Button variant='outlined' color='error'>
					Error
				</Button>
				<Button variant='outlined' color='warning'>
					Warning
				</Button>
				<Button variant='outlined' color='info'>
					Info
				</Button>
				<Button variant='outlined' color='success'>
					Success
				</Button>
				<Button variant='outlined' disabled>
					Disabled
				</Button>
			</Box>

			<Typography variant='h6' gutterBottom>
				Text Buttons
			</Typography>
			<Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
				<Button variant='text' color='primary'>
					Primary
				</Button>
				<Button variant='text' color='secondary'>
					Secondary
				</Button>
				<Button variant='text' color='error'>
					Error
				</Button>
				<Button variant='text' color='warning'>
					Warning
				</Button>
				<Button variant='text' color='info'>
					Info
				</Button>
				<Button variant='text' color='success'>
					Success
				</Button>
				<Button variant='text' disabled>
					Disabled
				</Button>
			</Box>

			<Typography variant='h6' gutterBottom>
				Button Sizes
			</Typography>
			<Box
				sx={{
					mb: 4,
					display: 'flex',
					gap: 2,
					flexWrap: 'wrap',
					alignItems: 'center',
				}}
			>
				<Button variant='contained' color='primary' size='small'>
					Small
				</Button>
				<Button variant='contained' color='primary' size='medium'>
					Medium
				</Button>
				<Button variant='contained' color='primary' size='large'>
					Large
				</Button>
			</Box>
		</Box>
	)
}
