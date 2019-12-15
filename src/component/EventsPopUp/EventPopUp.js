import React, { useState, useEffect, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import EventPopList from "./EventPopList";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

export default function AlertDialog({ openPopEvent, popEvent, eventsInfo }) {
  const [open, setOpen] = useState(false);
  const [eventList, seteventList] = useState("");
  const isFirstRun = useRef(true);

  //prevent popup during first render, since eventList will be empty at first
  //on 2nd render then can setOpen to true to open the popup
  //run based on prop sent over from the user parent
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const setOpenPop = () => {
      return setOpen(true);
    };
    setOpenPop();
  }, [openPopEvent]);

  //method to filter to show only popup list item from selected event on calendar
  //since the eventlist is stored as an array of objects
  //trigger when popup open
  useEffect(() => {
    const eventFilter = eventsInfo.filter(e => e.eventTitle === popEvent);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const setEventPop = () => {
      return seteventList(eventFilter);
    };
    setEventPop();
  }, [open]);

  //method to close the pop up
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h6">{popEvent} </Typography>
        </DialogTitle>
        <EventPopList eventList={eventList} popEvent={popEvent} />
      </Dialog>
    </div>
  );
}
