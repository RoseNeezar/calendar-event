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
    maxWidth: 1000,
    overflow: "hidden"
  }
}));
//method used in the Bob component is the same just change Robert to Bob thats all
function Robert({
  RobertEvents,
  addEvents,
  addCalendarEvent,
  RobertCalendarEvent,
  user = "Robert"
}) {
  const [redirect, setredirect] = useState(false);

  const [calendarEvents, setcalendarEvents] = useState([]);
  const [start, setstart] = useState();
  const [allDay, setallDay] = useState(true);
  const [openPopEvent, setopenPopEvent] = useState(false);
  const [popEvent, setpopEvent] = useState("");

  //method to open the popup list which shows the events description like location and such
  //it also set the event title for the popup list
  const handlePopEvent = e => {
    setopenPopEvent(!openPopEvent);
    setpopEvent(e.event.title);
  };
  //method to handle 2 variables needed for calendar to mark an event set on a date
  //title=set in formEvent, start=start date and allDay=true/false variable is needed
  const handleChange = e => {
    setstart(e.date);
    setallDay(true);
  };

  //method to open and close the formEvent component, its based on 'start' variable which fire when user click on the calendar date
  useEffect(() => {
    return () => {
      setredirect(true);
    };
  }, [start]);

  //method to close the eventForm
  const closeForm = () => {
    setredirect(false);
  };

  //method to group the variables together to form an event
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
              <h1>Robert's Event</h1>
              <FullCalendar
                defaultView="dayGridMonth"
                header={{
                  left: "prev,next ",
                  center: "title",
                  right: ""
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                events={RobertCalendarEvent}
                dateClick={handleChange}
                eventClick={handlePopEvent}
              />
              <EventPopUp
                openPopEvent={openPopEvent}
                eventsInfo={RobertEvents}
                popEvent={popEvent}
              />
            </CardContent>
          </Card>
        )}
      </Grid>
    </Paper>
  );
}
export default Robert;
