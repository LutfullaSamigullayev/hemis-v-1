import { Button } from "./button";

export function Event({ item }) {
  return (
    <div className="event">
      <h2>{item.data}</h2>
      <div className="div">
        <p>{item.title}</p>
        <Button>Find More</Button>
      </div>
    </div>
  );
}
