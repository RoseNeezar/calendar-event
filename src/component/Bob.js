import React, { Component } from "react";
import Calendar from "./Calender";
import "./Bob.css";

export default class Bob extends Component {
  render() {
    return (
      <div className="Bob">
        <h1>This is bob</h1>
        <div className="Calendar">
          <Calendar />
          {this.props.BobEvents.map(ev => {
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
