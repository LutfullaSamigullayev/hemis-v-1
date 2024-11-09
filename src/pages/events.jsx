import { Event } from "../components";
export function Events() {
  const events = [
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
  ];
  return (
    <div className="events">
      <ul className="events__wrapper">
        {events.map((item) => (
          <li key={item.id}>
            <Event item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
