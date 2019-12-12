import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Bob.css";
import EventList from "./EventList";
import { convert } from "../helpers/dateFormat";
import EventForm from "./EventForms";

function Bob({ BobEvents, addEvents }) {
  Bob.defaultProps = {
    user: "Bob"
  };
  const [date, setdate] = useState(new Date());
  const [redirect, setredirect] = useState(false);
  const [eventDate, seteventDate] = useState("");

  const handleChange = e => {
    setdate(e);
    setredirect(true);
    seteventDate(convert(e));
  };

  const closeForm = () => {
    setredirect(false);
  };

  return (
    <div className="Bob">
      {redirect ? (
        <EventForm
          closeForm={closeForm}
          addEvents={addEvents}
          eventDate={eventDate}
        />
      ) : (
        <div className="Calendar">
          <h1>Bob's Event</h1>
          <Calendar onClickDay={handleChange} value={date} />
          <EventList BobEvents={BobEvents} user={Bob} />
        </div>
      )}
    </div>
  );
}
export default Bob;
