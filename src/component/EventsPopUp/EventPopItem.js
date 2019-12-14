import React from "react";
import ListItem from "@material-ui/core/ListItem";

function EventPopItem(dateTime, location, Attendes, AssignedTo) {
  return (
    <>
      <ListItem>{dateTime}</ListItem>
      <ListItem>{location}</ListItem>
      <ListItem>{Attendes}</ListItem>
      <ListItem>{AssignedTo}</ListItem>
    </>
  );
}
export default EventPopItem;
