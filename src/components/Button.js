import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({
  text,
  icon = null,
  iconPosition = "before", // "before" or "after"
  textDecoration = false, // true for underline
  className = "",
  to = "", // Navigation path
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); // Navigate to the provided path
    }
    if (onClick) {
      onClick(); // Call the custom click handler if provided
    }
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}
      {...props}
      style={{
        border: "1px solid white", // Thin white border
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Weak shadow effect
        textDecoration: textDecoration ? "underline" : "none",
        display: "inline-flex",
        alignItems: "center",
        gap: icon ? "0.5rem" : "0", // Adds spacing between icon and text
        padding: "0.5rem 1rem", // Custom padding for consistency
        borderRadius: "0.25rem", // Rounded corners for a soft look
        color:"white",
        borderRadius:"10px"
      }}
    >
      {icon && iconPosition === "before" && <span className="btn-icon">{icon}</span>}
      {text}
      {icon && iconPosition === "after" && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

// Prop Types for validation
Button.propTypes = {
  text: PropTypes.string.isRequired, // Button text
  icon: PropTypes.node, // Icon component (optional)
  iconPosition: PropTypes.oneOf(["before", "after"]), // Icon position
  textDecoration: PropTypes.bool, // Text decoration underline
  className: PropTypes.string, // Additional classes for the button
  to: PropTypes.string, // Navigation path
  onClick: PropTypes.func, // Additional click handler
};

export default Button;
