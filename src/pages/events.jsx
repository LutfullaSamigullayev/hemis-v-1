import { useState } from "react";
import { Event } from "../components";
export function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Leadership Event",
      data: "24 June",
    },
    {
      id: 2,
      title: "C++ coding workshop",
      data: "24 June",
    },
    {
      id: 3,
      title: "Behavior Learning in Institution",
      data: "24 June",
    },
  ]);
  return (
    <div className="events">
      events
      <ul>
        {events.map((item) => {
          <li>
            <Event item={item} key={item.id} />;
          </li>;
        })}
      </ul>
    </div>
  );
}
