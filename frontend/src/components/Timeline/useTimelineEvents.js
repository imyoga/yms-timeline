import { useState, useEffect, useRef } from "react";

// Constants
const API_ENDPOINTS = {
  EVENTS: "/api/timeline/events",
};

/**
 * Custom hook for managing timeline events
 * Handles fetching, adding, and state management of events
 * @returns {Object} Timeline events state and methods
 */
export const useTimelineEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetchedRef = useRef(false);

  /**
   * Fetches events from the API
   */
  const fetchEvents = async () => {
    if (hasFetchedRef.current) return;
    
    setLoading(true);
    setError(null);
    hasFetchedRef.current = true;

    try {
      const response = await fetch(API_ENDPOINTS.EVENTS);
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }
      const existingEvents = await response.json();
      setEvents(existingEvents);
    } catch (err) {
      setError(err.message);
      hasFetchedRef.current = false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Adds a new event to the timeline
   * @param {Object} eventData - The event data to add
   * @returns {Promise<boolean>} - Success status
   */
  const addEvent = async (eventData) => {
    setError(null);
    
    try {
      const response = await fetch(API_ENDPOINTS.EVENTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add event: ${response.status}`);
      }

      const newEvent = await response.json();
      setEvents((prev) => [...prev, newEvent]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, loading, error, addEvent, refetch: fetchEvents };
}; 