import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Calendar from "react-calendar";

export default class Robert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);
  }

  handleChange(e) {
    this.setState({
      date: e,
      redirect: true
    });
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }

  render() {
    const formatDate = this.convert(this.state.date.toString());
    return (
      <div className="Robert">
        {this.state.redirect && <Redirect push to="/EventForms" />}
        <h1>{formatDate}</h1>
        <h1>This bob</h1>
        <div className="Calendar">
          <Calendar onClickDay={this.handleChange} value={this.state.date} />
          {this.props.RobertEvents.map(ev => {
            return (
              <div>
                <h1>{ev.eventTitle}</h1>
                <li>{ev.dateTime}</li>
                <li>{ev.location}</li>
                <li>{ev.Attendes}</li>
                <li>{ev.AssignedTo}</li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
