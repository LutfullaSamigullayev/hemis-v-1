import PropTypes from "prop-types";

export function Button({ children }) {
  return <button className="btn">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
