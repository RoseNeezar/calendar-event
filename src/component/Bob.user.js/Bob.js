import React, { useState, useEffect } from "react";
import "./Bob.css";
import EventForm from "../Events/EventForms";
import EventPopUp from "../EventsPopUp/EventPopUp";
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

  const [calendarEvents, setcalendarEvents] = useState([]);
  const [start, setstart] = useState();
  const [allDay, setallDay] = useState(true);
  const [openPopEvent, setopenPopEvent] = useState(false);
  const [popEvent, setpopEvent] = useState("");

  const handlePopEvent = e => {
    setopenPopEvent(!openPopEvent);
    setpopEvent(e.event.title);
  };

  const handleChange = e => {
    setstart(e.date);
    setallDay(true);
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
            eventClick={handlePopEvent}
          />
          <EventPopUp
            openPopEvent={openPopEvent}
            eventsInfo={BobEvents}
            popEvent={popEvent}
          />
        </div>
      )}
    </div>
  );
}
export default Bob;
