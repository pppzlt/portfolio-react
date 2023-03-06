import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="h-10 flex items-center justify-end text-2xl">
      <ul className="flex flex-row justify-end items-center ">
        <li className="px-2 ">
          <a
            href="#1"
            onClick={() => handlePageChange("About")}
            className={`hover:text-white 
          ${currentPage === "About" ? "border-b-2" : "border-none"}`}
          >
            01 About
          </a>
        </li>
        <li className="px-2 ">
          <a
            href="#2"
            onClick={() => handlePageChange("Portfolio")}
            className={`hover:text-white  ${
              currentPage === "Portfolio"
                ? "border-b-2"
                : "border-none"
            }`}
          >
            02 Projects
          </a>
        </li>
        <li className="px-2 ">
          <a
            href="#3"
            onClick={() => handlePageChange("Stack")}
            className={`hover:text-white               ${
              currentPage === "Stack" ? "border-b-2" : "border-none"
            }`}
          >
            03 Stack
          </a>
        </li>
        <li className="px-2 ">
          <a
            href="#4"
            onClick={() => handlePageChange("Contact")}
            className={`hover:text-white 
             ${
               currentPage === "Contact"
                 ? "border-b-2"
                 : "border-none"
             }`}
          >
            04 Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
