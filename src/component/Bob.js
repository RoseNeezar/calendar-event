import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Calendar from "react-calendar";
import "./Bob.css";
import EventList from "./EventList";

export default class Bob extends Component {
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
      <div className="Bob">
        <h1> Bob</h1>
        <div className="Calendar">
          <Calendar onClickDay={this.handleChange} value={this.state.date} />
          <EventList
            BobEvents={this.props.BobEvents}
            currentDate={this.state.date.toString()}
          />
        </div>
        {this.state.redirect && <Redirect push to="/EventForms" />}
      </div>
    );
  }
}
