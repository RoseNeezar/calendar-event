import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

function EventPopList({ eventList }) {
  //map through the eventList
  return (
    <List>
      {eventList.map(st => {
        return (
          <div key={st.id}>
            <ListItem>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              Date/Time : {st.dateTime}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              Location : {st.location}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              Number Of People : {st.Attendes}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              Assigned To : {st.AssignedTo}
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}

export default EventPopList;
