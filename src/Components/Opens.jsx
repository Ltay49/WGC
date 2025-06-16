import { useEffect, useState } from "react";
import "../Opens.css";

function Opens() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const calendarId = "wernthgccalendar@gmail.com";
  const apiKey = "AIzaSyD8ctjstn0GyLVlMQug8QAIVS_2GC2KEYY"; // Replace with your key

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const timeMin = new Date().toISOString();
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${timeMin}`
        );
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();

        // Filter for events that contain "open" in the summary (case-insensitive)
        const filtered = data.items.filter((event) =>
          event.summary?.toLowerCase().includes("open")
        );

        setEvents(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading fixtures...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="agenda-container">
          <p className="info-text">
      For all open events please contact the club professional to book or for further information
    </p>
      <h3 className="agenda-title">📅 Upcoming Fixtures</h3>
      <ul className="agenda-list">
        {events.map((event) => {
          const start = event.start.dateTime || event.start.date;
          const dateObj = new Date(start);
          const date = dateObj.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
          const time = event.start.dateTime
            ? dateObj.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : null;

          return (
            <li key={event.id} className="agenda-item">
              <div className="agenda-date">
                <strong>{date}</strong>
                {time && <span className="agenda-time">{time}</span>}
              </div>
              <div className="agenda-details">{event.summary}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Opens;
