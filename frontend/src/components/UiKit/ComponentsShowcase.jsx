import {
	Typography,
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid,
	TextField,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Chip,
	Divider,
} from '@mui/material'

/**
 * Components showcase that displays various MUI components
 * @returns {JSX.Element} A component displaying various MUI components
 * @example
 * <ComponentsShowcase />
 */
export const ComponentsShowcase = () => {
	return (
		<Box sx={{ m: 0, p: 0 }}>
			<Typography variant='h4' gutterBottom>
				Components
			</Typography>
			<Divider sx={{ mb: 3 }} />

			<Typography variant='h6' gutterBottom>
				Cards
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={12} md={4}>
					<Card>
						<CardHeader title='Card Title' subheader='Card Subheader' />
						<CardContent>
							<Typography variant='body2'>
								This is a basic card with header and content.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent>
							<Typography variant='h6' gutterBottom>
								Card Title
							</Typography>
							<Typography variant='body2'>
								This is a simple card with just content.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Typography variant='h6' gutterBottom>
				Text Fields
			</Typography>
			<Grid container spacing={2} sx={{ mb: 4 }}>
				<Grid item xs={12} md={4}>
					<TextField label='Standard' variant='outlined' fullWidth />
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField label='Disabled' variant='outlined' disabled fullWidth />
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						label='Error'
						variant='outlined'
						error
						helperText='Error message'
						fullWidth
					/>
				</Grid>
			</Grid>

			<Typography variant='h6' gutterBottom>
				Tables
			</Typography>
			<TableContainer component={Paper} sx={{ mb: 4 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Role</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>John Doe</TableCell>
							<TableCell>john@example.com</TableCell>
							<TableCell>Admin</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Jane Smith</TableCell>
							<TableCell>jane@example.com</TableCell>
							<TableCell>User</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<Typography variant='h6' gutterBottom>
				Chips
			</Typography>
			<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
				<Chip label='Default' />
				<Chip label='Primary' color='primary' />
				<Chip label='Secondary' color='secondary' />
				<Chip label='Success' color='success' />
				<Chip label='Error' color='error' />
				<Chip label='Info' color='info' />
				<Chip label='Warning' color='warning' />
			</Box>
		</Box>
	)
}
