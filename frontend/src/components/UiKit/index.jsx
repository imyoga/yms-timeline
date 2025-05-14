import {
	Typography,
	Box,
	Button,
	Paper,
	Divider,
	Card,
	CardContent,
	Chip,
	Alert,
	Switch,
	TextField,
} from '@mui/material'

/**
 * ThemeSystem component that showcases various MUI components with different theme colors
 * @returns {JSX.Element} A component displaying various themed elements
 */
export const UiKit = () => {
	return (
		<Box sx={{ my: 4 }}>
			<Typography variant='h3' component='h1' gutterBottom>
				Theme Color Showcase
			</Typography>

			<Divider sx={{ my: 3 }} />

			{/* Typography variants */}
			<Typography variant='h4' gutterBottom>
				Typography
			</Typography>
			<Box sx={{ mb: 3 }}>
				<Typography variant='h1'>Heading 1</Typography>
				<Typography variant='h2'>Heading 2</Typography>
				<Typography variant='h3'>Heading 3</Typography>
				<Typography variant='body1'>Body 1 text example</Typography>
				<Typography variant='body2'>Body 2 text example</Typography>
				<Typography color='primary'>Primary color text</Typography>
				<Typography color='secondary'>Secondary color text</Typography>
				<Typography color='error'>Error color text</Typography>
				<Typography color='warning.main'>Warning color text</Typography>
				<Typography color='info.main'>Info color text</Typography>
				<Typography color='success.main'>Success color text</Typography>
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Buttons */}
			<Typography variant='h4' gutterBottom>
				Buttons
			</Typography>
			<Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
				<Button variant='outlined' color='primary'>
					Outlined
				</Button>
				<Button variant='text' color='primary'>
					Text
				</Button>
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Cards and Paper */}
			<Typography variant='h4' gutterBottom>
				Cards & Paper
			</Typography>
			<Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
				<Paper elevation={2} sx={{ p: 2, width: 200 }}>
					<Typography variant='h6'>Paper Component</Typography>
					<Typography variant='body2'>With elevation 2</Typography>
				</Paper>

				<Card sx={{ width: 200 }}>
					<CardContent>
						<Typography variant='h6'>Card Component</Typography>
						<Typography variant='body2'>Sample card content</Typography>
					</CardContent>
				</Card>
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Form elements */}
			<Typography variant='h4' gutterBottom>
				Form Elements
			</Typography>
			<Box
				sx={{
					mb: 3,
					display: 'flex',
					gap: 2,
					flexDirection: 'column',
					maxWidth: 400,
				}}
			>
				<TextField label='Standard input' variant='outlined' />
				<TextField
					label='Error input'
					variant='outlined'
					error
					helperText='Error message'
				/>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography>Switch:</Typography>
					<Switch defaultChecked />
					<Switch />
				</Box>
			</Box>

			<Divider sx={{ my: 3 }} />

			{/* Alerts and Chips */}
			<Typography variant='h4' gutterBottom>
				Alerts & Chips
			</Typography>
			<Box sx={{ mb: 3, display: 'flex', gap: 2, flexDirection: 'column' }}>
				<Alert severity='success'>Success alert</Alert>
				<Alert severity='info'>Info alert</Alert>
				<Alert severity='warning'>Warning alert</Alert>
				<Alert severity='error'>Error alert</Alert>

				<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
					<Chip label='Default Chip' />
					<Chip label='Primary' color='primary' />
					<Chip label='Secondary' color='secondary' />
					<Chip label='Success' color='success' />
					<Chip label='Error' color='error' />
					<Chip label='Info' color='info' />
					<Chip label='Warning' color='warning' />
				</Box>
			</Box>
		</Box>
	)
}
