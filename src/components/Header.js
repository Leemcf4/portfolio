import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    linkTo: "/",
    linkTitle: "Home",
  },
  {
    linkTo: "/projects",
    linkTitle: "Projects",
  },
  {
    linkTo: "/skills",
    linkTitle: "Skills",
  },
  {
    linkTo: "/contact",
    linkTitle: "Contact",
  },
];

function Header() {
  return (
    <div className="header">
      <div className="nav-links">
        {navLinks?.map((link) => (
          <NavLink
            exact
            to={link.linkTo}
            activeStyle={{
              color: "white",
              borderBottom: "2px solid #fff",
            }}
          >
            {link.linkTitle}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
