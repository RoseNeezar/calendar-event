import React, { useState, useEffect } from "react";
import "./Robert.css";
import EventList from "./EventList";
import { convert } from "../helpers/dateFormat";
import EventForm from "./EventForms";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Robert({
  RobertEvents,
  addEvents,
  addCalendarEvent,
  RobertCalendarEvent,
  user = "Robert"
}) {
  const [redirect, setredirect] = useState(false);
  const [eventDate, seteventDate] = useState("");

  const [calendarEvents, setcalendarEvents] = useState([]);
  const [start, setstart] = useState();
  const [allDay, setallDay] = useState(true);

  const handleChange = e => {
    setstart(e.date);
    setallDay(true);
    seteventDate(convert(e));
  };

  useEffect(() => {
    return () => {
      setredirect(true);
    };
  }, [start]);

  const closeForm = () => {
    setredirect(false);
  };

  useEffect(() => {
    const calendarSetter = () => {
      return setcalendarEvents({ start, allDay, user });
    };
    calendarSetter();
  }, [start]);

  return (
    <div className="Robert">
      {redirect ? (
        <EventForm
          closeForm={closeForm}
          addEvents={addEvents}
          eventDate={eventDate}
          addCalendarEvent={addCalendarEvent}
          calendarEvents={calendarEvents}
        />
      ) : (
        <div className="Calendar">
          <h1>Robert's Event</h1>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: ""
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={RobertCalendarEvent}
            dateClick={handleChange}
          />
          <EventList eventsInfo={RobertEvents} />
        </div>
      )}
    </div>
  );
}
export default Robert;
