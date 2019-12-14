import React, { useState, useEffect } from "react";

import "./Bob.css";
import EventList from "./EventList";
import { convert } from "../helpers/dateFormat";
import EventForm from "./EventForms";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Bob({
  BobEvents,
  addEvents,
  addCalendarEvent,
  BobCalendarEvent,
  user = "Bob"
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
    <div className="Bob">
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
          <h1>Bob's Event</h1>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: ""
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={BobCalendarEvent}
            dateClick={handleChange}
          />
          <EventList eventsInfo={BobEvents} />
        </div>
      )}
    </div>
  );
}
export default Bob;
