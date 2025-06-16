import { Box, Card, CardContent, Typography, Alert, CircularProgress } from '@mui/material'
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from '@mui/lab'
import { Event, Schedule } from '@mui/icons-material'

/**
 * Timeline display component
 * Renders the list of events in a vertical timeline layout
 * @param {Array} events - Array of timeline events
 * @param {boolean} loading - Loading state
 * @param {string} error - Error message if any
 * @example
 * <TimelineDisplay
 *   events={[{eventTitle: "Meeting", date: "2024-01-01", time: "10:00", eventDescription: "Team sync"}]}
 *   loading={false}
 *   error={null}
 * />
 */
export const TimelineDisplay = ({ events, loading, error }) => {
	if (loading) {
		return (
			<Box display='flex' justifyContent='center' alignItems='center' height='200px'>
				<CircularProgress />
			</Box>
		)
	}

	if (error) {
		return (
			<Alert severity='error' sx={{ mb: 2 }}>
				Error loading events: {error}
			</Alert>
		)
	}

	if (events.length === 0) {
		return (
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='200px'
				sx={{
					border: '2px dashed',
					borderColor: 'grey.300',
					borderRadius: 2,
					backgroundColor: 'grey.50',
				}}
			>
				<Typography variant='body1' color='text.secondary' textAlign='center'>
					No events yet. Add your first event using the form above.
				</Typography>
			</Box>
		)
	}

	return (
		<Timeline position='alternate'>
			{events.map((event, index) => (
				<TimelineItem key={`${event.date}-${event.time}-${index}`}>
					<TimelineOppositeContent
						sx={{ m: 'auto 0' }}
						align={index % 2 === 0 ? 'right' : 'left'}
						variant='body2'
						color='text.secondary'
					>
						<Typography variant='caption' display='block' color='primary.main' fontWeight='bold'>
							{event.date}
						</Typography>
						<Typography variant='caption' display='block' sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
							<Schedule fontSize='small' />
							{event.time}
						</Typography>
					</TimelineOppositeContent>

					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot
							color='primary'
							variant='outlined'
							sx={{
								border: 2,
								backgroundColor: 'primary.main',
								'&:hover': {
									transform: 'scale(1.1)',
									transition: 'transform 0.2s ease-in-out',
								},
							}}
						>
							<Event sx={{ color: 'white', fontSize: '1rem' }} />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>

					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Card
							elevation={2}
							sx={{
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									elevation: 4,
									transform: 'translateY(-2px)',
									boxShadow: theme => theme.shadows[8],
								},
							}}
						>
							<CardContent sx={{ pb: '16px !important' }}>
								<Typography
									variant='h6'
									component='h3'
									color='primary.main'
									sx={{
										fontWeight: 600,
										mb: 1,
										lineHeight: 1.2,
									}}
								>
									{event.eventTitle}
								</Typography>
								<Typography
									variant='body2'
									color='text.primary'
									sx={{
										lineHeight: 1.6,
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										display: '-webkit-box',
										WebkitLineClamp: 3,
										WebkitBoxOrient: 'vertical',
									}}
								>
									{event.eventDescription}
								</Typography>
							</CardContent>
						</Card>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	)
}
