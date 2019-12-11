import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>ABOUT!!</h1>
        <ul>
          <li>Click bob</li>
          <li>In Bob Component click the dates on the calendar</li>
          <li>It will take you to a form to fill</li>
          <li>at the option selector,can select to assign to bob or robert</li>
          <li>
            events will be displayed on either bob or robert depending on the
            selected option
          </li>
          <li>
            current state need to manually click back the component name to go
            back to bob or robert from form
          </li>
          <li>need to add better styling</li>
        </ul>
      </div>
    );
  }
}
