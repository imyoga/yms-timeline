import {
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

/**
 * Timeline display component
 * Renders the list of events in a scrollable container
 * @param {Array} events - Array of timeline events
 * @param {boolean} loading - Loading state
 * @param {string} error - Error message if any
 */
export const TimelineDisplay = ({ events, loading, error }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        Error loading events: {error}
      </Alert>
    );
  }

  if (events.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        No events yet. Add your first event using the form.
      </Typography>
    );
  }

  return (
    <>
      {events.map((event, index) => (
        <Card key={`${event.date}-${event.time}-${index}`} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h3">
              {event.eventTitle}
            </Typography>
            <Typography variant="subtitle2" color="primary">
              {event.date} at {event.time}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {event.eventDescription}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}; 