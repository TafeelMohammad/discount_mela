import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Link, { className: "nav-link", to: "/signup" }, "Signup"),
      React.createElement("span", { className: "separator" }, " | "),
      React.createElement(Link, { className: "nav-link", to: "/login" }, "Login")
    )
  );
};

export default Navbar;
