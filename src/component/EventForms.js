import React, { Component } from "react";
import "./EventForms.css";

export default class EventForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: "",
      dateTime: props.eventDate,
      location: "",
      Attendes: 0,
      AssignedTo: "Bob"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeForm();
    this.props.addEvents(this.state);
    this.props.calendarEvents.title = this.state.eventTitle;
    this.props.calendarEvents.AssignedTo = this.state.AssignedTo;
    this.props.addCalendarEvent(this.props.calendarEvents);
    this.setState({
      eventTitle: "",
      dateTime: "",
      location: "",
      Attendes: 0,
      AssignedTo: "Bob"
    });
  }

  render() {
    return (
      <div className="formEvent">
        <div className="container-fluid">
          <div className="row justify-content-center m-4">
            <div className="col-12 col-sm-8 col-md-7">
              <h1>Event form</h1>
              <form className="Form-container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="eventTitle" className="float-left">
                    Event Title
                  </label>
                  <input
                    name="eventTitle"
                    value={this.state.eventTitle}
                    onChange={this.handleChange}
                    placeholder="Event Title"
                    className="form-control mb-4"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateTime" className="float-left">
                    Date and time
                  </label>
                  <input
                    name="dateTime"
                    value={this.state.dateTime}
                    onChange={this.handleChange}
                    placeholder="date and time"
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
                    value={this.state.location}
                    onChange={this.handleChange}
                    placeholder="Location"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Attendes" className="float-left">
                    Number of people attending
                  </label>
                  <input
                    name="Attendes"
                    value={this.state.Attendes}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  >
                    <option value={"Bob"} name="AssignedTo">
                      Bob
                    </option>
                    <option value={"Robert"} name="AssignedTo">
                      Robert
                    </option>
                  </select>
                </div>
                <button className="btn bg-black btn-block text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
