import {
	Box,
	Typography,
	Card,
	CardContent,
	Switch,
	FormControlLabel,
	Divider,
} from '@mui/material'
import { useState } from 'react'

/**
 * Settings page component
 *
 * @returns {JSX.Element} Settings component
 * @example
 * <Settings />
 */
export const Settings = () => {
	const [settings, setSettings] = useState({
		notifications: true,
		darkMode: false,
		autoSave: true,
	})

	const handleChange = (event) => {
		setSettings({
			...settings,
			[event.target.name]: event.target.checked,
		})
	}

	return (
		<Box sx={{ border: '1px solid red' }}>
			<Typography variant='body1' sx={{ mb: 3 }}>
				Configure your application settings.
			</Typography>

			<Card sx={{ mb: 3 }}>
				<CardContent>
					<Typography variant='h6' gutterBottom>
						Application Settings
					</Typography>

					<FormControlLabel
						control={
							<Switch
								checked={settings.notifications}
								onChange={handleChange}
								name='notifications'
							/>
						}
						label='Enable Notifications'
					/>

					<Divider sx={{ my: 2 }} />

					<FormControlLabel
						control={
							<Switch
								checked={settings.darkMode}
								onChange={handleChange}
								name='darkMode'
							/>
						}
						label='Dark Mode'
					/>

					<Divider sx={{ my: 2 }} />

					<FormControlLabel
						control={
							<Switch
								checked={settings.autoSave}
								onChange={handleChange}
								name='autoSave'
							/>
						}
						label='Auto Save Changes'
					/>
				</CardContent>
			</Card>
		</Box>
	)
}
