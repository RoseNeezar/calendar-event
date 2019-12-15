import React, { useState, useEffect } from "react";
import EventForm from "../Events/EventForms";
import EventPopUp from "../EventsPopUp/EventPopUp";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000
  }
}));

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

  const classes = useStyles();

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh"
      }}
      elevation={0}
    >
      <Grid
        container
        justify="center"
        style={{
          marginTop: "3rem"
        }}
      >
        {redirect ? (
          <EventForm
            closeForm={closeForm}
            addEvents={addEvents}
            addCalendarEvent={addCalendarEvent}
            calendarEvents={calendarEvents}
          />
        ) : (
          <Card className={classes.card}>
            <CardContent>
              <h1>Bob's Event</h1>
              <FullCalendar
                defaultView="dayGridMonth"
                header={{
                  left: "prev,next ",
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
            </CardContent>
          </Card>
        )}
      </Grid>
    </Paper>
  );
}
export default Bob;
