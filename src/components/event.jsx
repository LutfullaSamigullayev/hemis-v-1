import { Button } from "./button";
import PropTypes from "prop-types";

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

Event.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
};
