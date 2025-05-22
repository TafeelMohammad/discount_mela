import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/discount-mela-logo.png";

const logo = logo;

const Navbar = () => {
  return React.createElement(
    "nav",
    { className: "navbar" },
    React.createElement(
      "div",
      { className: "nav-left" },
      React.createElement(Link, { className: "nav-link", to: "/signup" }, "Signup"),
      React.createElement("span", { className: "separator" }, " | "),
      React.createElement(Link, { className: "nav-link", to: "/login" }, "Login")
    ),
    React.createElement(
      "div",
      { className: "nav-center" },
      React.createElement("img", {
        src: logo,
        alt: "Discount Mela Logo",
        className: "logo"
      })
    ),
    React.createElement(
      "div",
      { className: "nav-right" },
      React.createElement("span", { className: "nav-text" }, "Welcome to Discount Mela!!!")
    )
  );
};

export default Navbar;
