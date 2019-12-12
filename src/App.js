import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Bob from "./component/Bob";
import About from "./component/About";
import Robert from "./component/Robert";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BobEvents: [],
      RobertEvents: []
    };
    this.addEvents = this.addEvents.bind(this);
  }

  addEvents(newEvent) {
    if (newEvent.AssignedTo === "Bob") {
      this.setState({
        BobEvents: [...this.state.BobEvents, newEvent]
      });
    } else {
      this.setState({
        RobertEvents: [...this.state.RobertEvents, newEvent]
      });
    }
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
            render={() => (
              <Bob
                BobEvents={this.state.BobEvents}
                addEvents={this.addEvents}
              />
            )}
          />
          <Route
            exact
            path="/Robert"
            render={() => (
              <Robert
                RobertEvents={this.state.RobertEvents}
                addEvents={this.addEvents}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
