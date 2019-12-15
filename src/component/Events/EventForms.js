import React from "react";
import "./EventForms.css";
import useFormInput from "../../hooks/useFormInput";

function EventForms({
  closeForm,
  addEvents,
  calendarEvents,
  addCalendarEvent
}) {
  const [eventTitle, seteventTitle, reseteventTitle] = useFormInput("");
  const [dateTime, setdateTime, resetdateTime] = useFormInput("");
  const [location, setlocation, resetlocation] = useFormInput("");
  const [Attendes, setAttendes, resetAttendes] = useFormInput(0);
  const [AssignedTo, setAssignedTo, resetAssignedTo] = useFormInput("Bob");

  //method to handle state and props passed from parent when button is pressed
  const handleSubmit = e => {
    e.preventDefault();
    closeForm();
    addEvents({ eventTitle, dateTime, location, Attendes, AssignedTo });
    calendarEvents.title = eventTitle;
    calendarEvents.AssignedTo = AssignedTo;
    addCalendarEvent(calendarEvents);
    reseteventTitle();
    resetdateTime();
    resetlocation();
    resetAttendes(0);
    resetAssignedTo("Bob");
  };

  return (
    <>
      <div className="formEvent">
        <h1 className="text-center p-2">Form Event</h1>
        <form className="Form-container" onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="eventTitle" className="float-left">
              Event Title
            </label>
            <input
              name="eventTitle"
              value={eventTitle}
              onChange={seteventTitle}
              placeholder="Ted Talk"
              className="form-control mb-4"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateTime" className="float-left">
              Date/Time
            </label>
            <input
              name="dateTime"
              value={dateTime}
              onChange={setdateTime}
              placeholder="5.30pm - 6.30pm"
              className="form-control"
              id="date-time"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="float-left">
              Location
            </label>
            <input
              name="location"
              value={location}
              onChange={setlocation}
              placeholder="Hall 5"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Attendes" className="float-left">
              Number of people attending
            </label>
            <input
              name="Attendes"
              value={Attendes}
              onChange={setAttendes}
              placeholder="Attendes"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="user" className="float-left">
              Assign to
            </label>
            <select
              name="AssignedTo"
              className="form-control"
              onChange={setAssignedTo}
            >
              <option value={"Bob"} name="AssignedTo">
                Bob
              </option>
              <option value={"Robert"} name="AssignedTo">
                Robert
              </option>
            </select>
          </div>
          <button className="btn bg-black btn-block text-white">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EventForms;
