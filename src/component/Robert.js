import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Bob.css";
import EventList from "./EventListRobert";
import { convert } from "../helpers/dateFormat";
import EventForm from "./EventForms";

function Robert({ RobertEvents, addEvents }) {
  Robert.defaultProps = {
    user: "Robert"
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
    <div className="Robert">
      {redirect ? (
        <EventForm
          closeForm={closeForm}
          addEvents={addEvents}
          eventDate={eventDate}
        />
      ) : (
        <div className="Calendar">
          <h1>Roberts's Event</h1>
          <Calendar onClickDay={handleChange} value={date} />
          <EventList RobertEvents={RobertEvents} user={Robert} />
        </div>
      )}
    </div>
  );
}
export default Robert;
