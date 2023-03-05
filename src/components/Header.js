import React from "react";

function Header({ currentPage, HandlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => HandlePageChange("About")}
          className={
            currentPage === "about" ? "nav-link active" : "nav-link inactive"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => HandlePageChange("Portfolio")}
          className={
            currentPage === "portfolio"
              ? "nav-link active"
              : "nav-link inactive"
          }
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#stack"
          onClick={() => HandlePageChange("Stack")}
          className={
            currentPage === "stack" ? "nav-link active" : "nav-link inactive"
          }
        >
          Stack
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => HandlePageChange("Contact")}
          className={
            currentPage === "contact" ? "nav-link active" : "nav-link inactive"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Header;
