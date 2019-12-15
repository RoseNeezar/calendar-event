import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Bob from "./component/Bob.user.js/Bob";
import About from "./component/About";
import Robert from "./component/Robert.user.js/Robert";
import uuid from "uuid/v4";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

function App() {
  const [BobEvents, setBobEvents] = useState([]);
  const [RobertEvents, setRobertEvents] = useState([]);
  const [BobCalendarEvent, setBobCalendarEvent] = useState([]);
  const [RobertCalendarEvent, setRobertCalendarEvent] = useState([]);

  const addCalendarEvent = newCalendarEvent => {
    let calendarItems = { ...newCalendarEvent, id: uuid() };
    if (newCalendarEvent.AssignedTo === "Bob") {
      setBobCalendarEvent([...BobCalendarEvent, calendarItems]);
    } else {
      setRobertCalendarEvent([...RobertCalendarEvent, calendarItems]);
    }
  };

  const addEvents = newEvent => {
    let eventItem = { ...newEvent, id: uuid() };
    if (newEvent.AssignedTo === "Bob") {
      setBobEvents([...BobEvents, eventItem]);
    } else {
      setRobertEvents([...RobertEvents, eventItem]);
    }
  };

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <>
          <ListItem key={"about"} exact="true" component={Link} to="/">
            <ListItemText primary={"About"} />
          </ListItem>
          <Divider />
          <ListItem key={"Bob"} exact="true" component={Link} to="/Bob">
            <ListItemText primary={"Bob"} />
          </ListItem>
          <ListItem key={"Robert"} exact="true" component={Link} to="/Robert">
            <ListItemText primary={"Robert"} />
          </ListItem>
        </>
      </List>
      <Divider />
    </div>
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#2c3e50"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Calendar Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          exact
          path="/Bob"
          render={() => (
            <Bob
              BobEvents={BobEvents}
              addEvents={addEvents}
              BobCalendarEvent={BobCalendarEvent}
              addCalendarEvent={addCalendarEvent}
            />
          )}
        />
        <Route
          exact
          path="/Robert"
          render={() => (
            <Robert
              RobertEvents={RobertEvents}
              addEvents={addEvents}
              RobertCalendarEvent={RobertCalendarEvent}
              addCalendarEvent={addCalendarEvent}
            />
          )}
        />
      </Switch>
    </div>
  );
}
export default App;
