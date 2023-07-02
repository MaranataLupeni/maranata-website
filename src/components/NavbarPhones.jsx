import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo-text.png";
import "../styles/nav-phones.scss";

const NavbarPhones = (props) => {
  const { handleMenuOpen } = props;
  const navigate = useNavigate();

  return (
    <header className="nav-phones">
      <img
        src={logo}
        onClick={() => navigate("/")}
        alt="Biserica Maranata Lupeni"
      />
      <button onClick={() => handleMenuOpen(true)}>
        <i className="bi bi-list" />
      </button>
    </header>
  );
};

export default NavbarPhones;
