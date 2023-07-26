import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/menu.scss";
import "animate.css";
import logo from "../assets/images/logo-text.png";

const actions = [
  {
    id: 1,
    text: "Tineret",
    link: "/tineret",
  },
  {
    id: 2,
    text: "Grupa Duminicală",
    link: "/grupa-duminicala",
  },
  {
    id: 3,
    text: "Istoric",
    link: "/istoric",
  },
  {
    id: 4,
    text: "Lideri",
    link: "/lideri",
  },
  {
    id: 5,
    text: "Locație",
    link: "/locatie",
  },
  {
    id: 6,
    text: "Slujbe",
    link: "/slujbe",
  },
  {
    id: 7,
    text: "Live",
    link: "/live",
  },
  {
    id: 8,
    text: "Credință",
    link: "/credinta",
  },
  {
    id: 9,
    text: "Evenimente",
    link: "/evenimente",
  },
];

const Menu = (props) => {
  const { handleMenuOpen, handleFormOpen, handleFormPurpose } = props;

  return (
    <div className="menu-container animate__animated animate__slideInDown animate__faster">
      <img src={logo} alt="Biserica Maranata Lupeni" />
      <button
        onClick={() => {
          const menu = document.querySelector(".menu-container");
          menu.classList.remove("animate__slideInDown");
          menu.classList.add("animate__slideOutUp");
          setTimeout(() => handleMenuOpen(false), 400);
        }}
      >
        <i className="bi bi-x-lg" />
      </button>
      <div className="menu-phones">
        <button
          className="rugaciune"
          onClick={() => {
            handleMenuOpen(true);
            handleFormPurpose("prayer");
            handleFormOpen(true);
          }}
        >
          Rugăciune
        </button>
        {actions.map((action) => (
          <Link
            to={action.link}
            key={action.id}
            onClick={() => {
              const menu = document.querySelector(".menu-container");
              menu.classList.remove("animate__slideInDown");
              menu.classList.add("animate__slideOutUp");
              setTimeout(() => handleMenuOpen(false), 400);
            }}
          >
            {action.text}
          </Link>
        ))}
        <button
          className="contact"
          onClick={() => {
            handleMenuOpen(true);
            handleFormPurpose("contact");
            handleFormOpen(true);
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Menu;
