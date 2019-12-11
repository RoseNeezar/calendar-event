import React, { Component } from "react";
import { Collapse } from "reactstrap";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div
          onClick={this.toggleAccordion}
          className="port-item p-4 bg-primary"
        >
          <button className="btn btn-primary">{this.props.currentDate}</button>
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">{this.props.eventTitle}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Date : {this.props.dateTime}</li>
              <li className="list-group-item">
                Location : {this.props.location}
              </li>
              <li className="list-group-item">
                Number of people : {this.props.Attendes}
              </li>
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}
