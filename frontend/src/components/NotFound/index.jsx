import { Box, Typography, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

/**
 * NotFound page component displayed when a route doesn't exist
 *
 * @returns {JSX.Element} NotFound component
 * @example
 * <NotFound />
 */
export const NotFound = () => {
	const navigate = useNavigate()

	return (
		<Container maxWidth='sm'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '80vh',
					textAlign: 'center',
				}}
			>
				<Typography variant='h1' component='h1' gutterBottom>
					404
				</Typography>
				<Typography variant='h4' component='h2' gutterBottom>
					Page Not Found
				</Typography>
				<Typography variant='body1' sx={{ mb: 4 }}>
					The page you are looking for doesn&apos;t exist or has been moved.
				</Typography>
				<Button variant='contained' color='primary' onClick={() => navigate('/dashboard')}>
					Back to Dashboard
				</Button>
			</Box>
		</Container>
	)
}
