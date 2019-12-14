import React, { useState, useEffect, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import EventPopList from "./EventPopList";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ openPopEvent, popEvent, eventsInfo }) {
  const [open, setOpen] = useState(false);
  const [eventList, seteventList] = useState("");
  const isFirstRun = useRef(true);

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
        <DialogTitle id="alert-dialog-title">{popEvent}</DialogTitle>
        <EventPopList eventList={eventList} popEvent={popEvent} />
      </Dialog>
    </div>
  );
}
