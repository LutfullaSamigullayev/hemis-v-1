import { Button } from "./button";

export function Event({ item }) {
  return (
    <div className="event">
      <h1>{item.data}</h1>
      <div className="div">
        <p>{item.title}</p>
        <Button>Find More</Button>
      </div>
    </div>
  );
}
