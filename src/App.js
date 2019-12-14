import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Bob from "./component/Bob.user.js/Bob";
import About from "./component/About";
import Robert from "./component/Robert.user.js/Robert";
import uuid from "uuid/v4";

function App() {
  const [BobEvents, setBobEvents] = useState([]);
  const [RobertEvents, setRobertEvents] = useState([]);
  const [BobCalendarEvent, setBobCalendarEvent] = useState([]);
  const [RobertCalendarEvent, setRobertCalendarEvent] = useState([]);

  const addCalendarEvent = newCalendarEvent => {
    let calendarItems = { ...newCalendarEvent, id: uuid() };
    if (newCalendarEvent.AssignedTo === "Bob") {
      setBobCalendarEvent([...BobCalendarEvent, calendarItems]);
    } else {
      setRobertCalendarEvent([...RobertCalendarEvent, calendarItems]);
    }
  };

  const addEvents = newEvent => {
    let eventItem = { ...newEvent, id: uuid() };
    if (newEvent.AssignedTo === "Bob") {
      setBobEvents([...BobEvents, eventItem]);
    } else {
      setRobertEvents([...RobertEvents, eventItem]);
    }
  };

  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">
          About
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/Bob">
          Bob
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/Robert">
          Robert
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          exact
          path="/Bob"
          render={() => (
            <Bob
              BobEvents={BobEvents}
              addEvents={addEvents}
              BobCalendarEvent={BobCalendarEvent}
              addCalendarEvent={addCalendarEvent}
            />
          )}
        />
        <Route
          exact
          path="/Robert"
          render={() => (
            <Robert
              RobertEvents={RobertEvents}
              addEvents={addEvents}
              RobertCalendarEvent={RobertCalendarEvent}
              addCalendarEvent={addCalendarEvent}
            />
          )}
        />
      </Switch>
    </div>
  );
}
export default App;
