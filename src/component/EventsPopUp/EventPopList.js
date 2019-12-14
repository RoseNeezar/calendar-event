import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EventPopItem from "./EventPopItem";

function EventPopList({ eventList }) {
  return (
    <List>
      {eventList.map(st => {
        return (
          <div key={st.id}>
            <ListItem>Date/Time : {st.dateTime}</ListItem>
            <ListItem>Location : {st.location}</ListItem>
            <ListItem>Number Of People : {st.Attendes}</ListItem>
            <ListItem>Assigned To : {st.AssignedTo}</ListItem>
          </div>
        );
      })}
    </List>
  );
}

export default EventPopList;
