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
          <button className="btn btn-primary">{this.props.eventTitle}</button>
        </div>
        <Collapse isOpen={this.state.isOpen}>
          <div>
            <ul>
              <li>{this.props.eventTitle}</li>
              <li>Location : {this.props.location}</li>
              <li>Number of people : {this.props.Attendes}</li>
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}
