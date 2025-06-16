import {
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
  Alert,
} from "@mui/material";

import { useTimelineEvents } from "./useTimelineEvents";
import { TimelineDisplay } from "./TimelineDisplay";
import { EventForm } from "./EventForm";

/**
 * Main Timeline component
 * Orchestrates the timeline display and event form
 */
export const Timeline = () => {
  const { events, loading, error, addEvent } = useTimelineEvents();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {/* Left Container - Timeline Display */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: "600px", overflow: "auto" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Timeline
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TimelineDisplay 
              events={events} 
              loading={loading} 
              error={error} 
            />
          </Paper>
        </Grid>

        {/* Right Container - Event Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Add New Event
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <EventForm onSubmit={addEvent} loading={loading} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
