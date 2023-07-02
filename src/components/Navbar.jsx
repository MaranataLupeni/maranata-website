import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "../styles/navbar.scss";
import "../styles/dropdown.scss";

const actionsDropdownFirst = [
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
];

const actionsDropdownSecond = [
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
];

const actionsDropdownThird = [
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
];

const Navbar = (props) => {
  const { handleFormPurpose, handleFormOpen } = props;

  const [logoVisible, setLogoVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setLogoVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="desktop-navbar">
      <nav>
        <Dropdown text="Grupuri" actions={actionsDropdownFirst} />
        <Dropdown text="Despre noi" actions={actionsDropdownSecond} />
        <Dropdown text="Live" actions={actionsDropdownThird} />
      </nav>
      <img
        src={logo}
        alt="Maranata Lupeni"
        id="logo"
        onClick={() => {
          navigate(`/`);
        }}
        style={{
          width: logoVisible ? "150px" : "0",
          marginInline: logoVisible ? "-5px" : "0",
        }}
      />
      <nav>
        <Link
          onClick={() => {
            handleFormOpen(true);
            handleFormPurpose("prayer");
          }}
          className="nav-link"
        >
          Rugăciune
        </Link>
        <Link
          to="/credinta"
          className="nav-link"
          onClick={() => window.scrollTo(0, 0)}
        >
          Credință
        </Link>
        <Link
          onClick={() => {
            handleFormOpen(true);
            handleFormPurpose("contact");
          }}
          className="nav-link"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

const Dropdown = (props) => {
  const { actions, text } = props;

  return (
    <div className="dropdown">
      <div className="nav-link">{text}</div>
      <ul className="menu">
        {actions.map((action) => (
          <li key={action.id}>
            <Link to={action.link} onClick={() => window.scrollTo(0, 0)}>
              {action.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
