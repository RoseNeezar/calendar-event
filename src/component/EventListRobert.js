import React, { Component } from "react";

import Event from "./Event";

export default class EventList extends Component {
  render() {
    return (
      <div>
        {this.props.RobertEvents.map(st => {
          return (
            <Event
              eventTitle={st.eventTitle}
              dateTime={st.dateTime}
              location={st.location}
              Attendes={st.Attendes}
              currentDate={this.props.eventDate}
            />
          );
        })}
      </div>
    );
  }
}
