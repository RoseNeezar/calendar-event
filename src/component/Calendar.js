import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({
  eventTitle,
  handleChange,
  handleCalendarStart,
  handleCalendarAllDay,
  start,
  allDay,
  calendarEvents
}) {
  const [calendarEvents1, setcalendarEvents] = useState([
    // initial event data
    calendarEvents
  ]);
  const [start1, setstart1] = useState(start);
  const [allDay1, setallDay1] = useState(allDay);
  const [title, settitle] = useState(eventTitle);

  useEffect(() => {
    return () => {
      settitle(eventTitle);
    };
  }, [eventTitle]);

  const handleOnChange = e => {
    setstart1(e.date);
    setallDay1(e.allDay);
  };

  useEffect(() => {
    return () => {
      handleCalendarStart(start1);
      handleCalendarAllDay(allDay1);
      handleChange();
    };
  }, [allDay1]);

  // useEffect(() => {
  //   const calendarSetter = () => {
  //     return setcalendarEvents(
  //       calendarEvents.concat({
  //         title,
  //         start,
  //         allDay
  //       })
  //     );
  //   };
  //   calendarSetter();
  // }, [start1]);

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      header={{
        left: "prev,next today",
        center: "title",
        right: ""
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      events={calendarEvents1}
      dateClick={handleOnChange}
    />
  );
}

export default Calendar;
