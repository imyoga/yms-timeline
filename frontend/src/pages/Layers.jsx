import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Divider,
	Paper,
} from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'

/**
 * Layers management component
 *
 * @returns {JSX.Element} Layers component
 * @example
 * <Layers />
 */
export const Layers = () => {
	const layersList = [
		{ id: 1, name: 'Background Layer', type: 'Base' },
		{ id: 2, name: 'Content Layer', type: 'Dynamic' },
		{ id: 3, name: 'Overlay Layer', type: 'Static' },
	]

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='body1' sx={{ mb: 3 }}>
				Manage your timeline layers here.
			</Typography>

			<Paper elevation={2}>
				<List>
					{layersList.map((layer, index) => (
						<Box key={layer.id}>
							<ListItem>
								<ListItemIcon>
									<LayersIcon />
								</ListItemIcon>
								<ListItemText
									primary={layer.name}
									secondary={`Type: ${layer.type}`}
								/>
							</ListItem>
							{index < layersList.length - 1 && <Divider />}
						</Box>
					))}
				</List>
			</Paper>
		</Box>
	)
}
