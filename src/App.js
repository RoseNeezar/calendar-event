import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Calendar from "./component/Calender";
import Bob from "./component/Bob";
import About from "./component/About";
import Robert from "./component/Robert";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BobEvents: [
        {
          eventTitle: "Meeting",
          dateTime: "july",
          location: "Penang",
          Attendes: 0,
          AssignedTo: "Bob"
        },
        {
          eventTitle: "Meeting2",
          dateTime: "jun",
          location: "here",
          Attendes: 10,
          AssignedTo: "Robert"
        }
      ],
      RoberEvents: []
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">
            About
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/Bob">
            Bob
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/Robert">
            Robert
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route
            exact
            path="/Bob"
            render={() => <Bob BobEvents={this.state.BobEvents} />}
          />
          <Route exact path="/Robert" component={Robert} />
        </Switch>
      </div>
    );
  }
}
