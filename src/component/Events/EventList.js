import React from "react";
import Event from "./Event";

function EventList({ eventsInfo, eventDate }) {
  return (
    <div>
      {eventsInfo.map(st => {
        return (
          <Event
            eventTitle={st.eventTitle}
            dateTime={st.dateTime}
            location={st.location}
            Attendes={st.Attendes}
            currentDate={eventDate}
            key={st.id}
          />
        );
      })}
    </div>
  );
}

export default EventList;
