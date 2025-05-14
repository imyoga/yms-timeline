import { ThemeProvider } from './theme/index.jsx'
import { Container } from '@mui/material'
import { ThemeSystem } from './components/ThemeSystem'

export const App = () => {
	return (
		<ThemeProvider>
			<Container maxWidth='lg'>
				<ThemeSystem />
			</Container>
		</ThemeProvider>
	)
}
