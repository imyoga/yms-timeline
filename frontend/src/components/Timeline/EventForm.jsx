import { useState } from "react";
import {
  TextField,
  Button,
  Box,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

const INITIAL_FORM_STATE = {
  date: dayjs(),
  time: dayjs(),
  eventTitle: "",
  eventDescription: "",
};

/**
 * Event form component
 * Handles form state and submission for new events
 * @param {Function} onSubmit - Callback function for form submission
 * @param {boolean} loading - Global loading state
 */
export const EventForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitting, setSubmitting] = useState(false);

  /**
   * Handles input changes for text fields
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles date and time picker changes
   */
  const handleDateTimeChange = (field, newValue) => {
    setFormData((prev) => ({ ...prev, [field]: newValue }));
  };

  /**
   * Handles form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const submitData = {
      date: formData.date.format("YYYY-MM-DD"),
      time: formData.time.format("HH:mm"),
      eventTitle: formData.eventTitle,
      eventDescription: formData.eventDescription,
    };

    const success = await onSubmit(submitData);
    
    if (success) {
      setFormData(INITIAL_FORM_STATE);
    }
    
    setSubmitting(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <DatePicker
          label="Date"
          value={formData.date}
          onChange={(newValue) => handleDateTimeChange("date", newValue)}
          slotProps={{
            textField: {
              required: true,
              fullWidth: true,
            },
          }}
        />

        <TimePicker
          label="Time"
          value={formData.time}
          onChange={(newValue) => handleDateTimeChange("time", newValue)}
          slotProps={{
            textField: {
              required: true,
              fullWidth: true,
            },
          }}
        />

        <TextField
          label="Event Title"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
        />

        <TextField
          label="Event Description"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleInputChange}
          required
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={submitting || loading}
          sx={{ mt: 2 }}
        >
          {submitting ? "Adding..." : "Add Event"}
        </Button>
      </Box>
    </LocalizationProvider>
  );
}; 