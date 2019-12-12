import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>ABOUT!!</h1>
        <ul>
          <li className="float-left block">
            In Bob Component click the dates on the calendar, it will take you
            to a form to fill
          </li>
          <li className="float-left block">
            at the option selector,can select to assign to bob or robert
          </li>
          <li className="float-left block">
            events will be displayed on either bob or robert depending on the
            selected option
          </li>
          <li className="float-left block">
            current state need to manually click back the component name to go
            back to bob or robert from form
          </li>
          <li className="float-left block">need to add better styling</li>
        </ul>
      </div>
    );
  }
}
