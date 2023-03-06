import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <button
        type="submit"
        className="about"
        onClick={() => {
          document.location.href = "/about";
        }}
      >
        About
      </button>
      <button
        type="submit"
        className="blog"
        onClick={() => {
          document.location.href = "/blog";
        }}
      >
        Blog
      </button>
      <button
        type="submit"
        className="contact"
        onClick={() => {
          document.location.href = "/contact";
        }}
      >
        Contact
      </button>
      <button
        type="submit"
        className="homepage"
        onClick={() => {
          document.location.href = "/homepage";
        }}
      >
        Homepage
      </button>
      <button
        type="submit"
        className="projects"
        onClick={() => {
          document.location.href = "/projects";
        }}
      >
        Projects
      </button>
    </div>
  );
};
export default Navbar;
