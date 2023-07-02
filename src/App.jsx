import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home.jsx";
import Location from "./components/Location.jsx";
import Sermons from "./components/Sermons.jsx";
import Beliefs from "./components/Beliefs.jsx";
import Live from "./components/Live.jsx";
import Kids from "./components/Kids.jsx";
import History from "./components/History.jsx";
import Leaders from "./components/Leaders.jsx";
import Youth from "./components/Youth.jsx";

import Navbar from "./components/Navbar.jsx";
import Menu from "./components/Menu.jsx";
import NavbarPhones from "./components/NavbarPhones.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

const App = () => {
  const [formPurpose, setFormPurpose] = useState("prayer");
  const [isFormedOpen, setIsFormedOpen] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleFormOpen = (isOpened) => {
    setIsFormedOpen(isOpened);
  };

  const handleFormPurpose = (purpose) => {
    setFormPurpose(purpose);
  };

  const handleMenuOpen = (isOpened) => {
    isOpened
      ? document
          .querySelectorAll(".cards-carousel button")
          .forEach((button) => (button.style.display = "none"))
      : document
          .querySelectorAll(".cards-carousel button")
          .forEach((button) => (button.style.display = "unset"));
    setIsMenuOpened(isOpened);
  };

  return (
    <div id="app">
      <Navbar
        handleFormOpen={handleFormOpen}
        handleFormPurpose={handleFormPurpose}
      />
      <NavbarPhones handleMenuOpen={handleMenuOpen} />
      {isMenuOpened && (
        <Menu
          handleMenuOpen={handleMenuOpen}
          handleFormOpen={handleFormOpen}
          handleFormPurpose={handleFormPurpose}
        />
      )}
      {isFormedOpen && (
        <Form
          formPurpose={
            formPurpose === "prayer" ? "Rugăciune" : "Contactează-ne"
          }
          placeholder={
            formPurpose === "prayer"
              ? "Descrie-ne problema prin care treci"
              : "Cu ce te putem ajuta?"
          }
          handleFormOpen={handleFormOpen}
          handleMenuOpen={handleMenuOpen}
        />
      )}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              handleFormOpen={handleFormOpen}
              handleFormPurpose={handleFormPurpose}
            />
          }
        />

        <Route path="/locatie" element={<Location />} />
        <Route path="/slujbe" element={<Sermons />} />
        <Route path="/live" element={<Live />} />
        <Route path="/grupa-duminicala" element={<Kids />} />
        <Route path="/credinta" element={<Beliefs />} />
        <Route path="/istoric" element={<History />} />
        <Route path="/lideri" element={<Leaders />} />
        <Route path="/tineret" element={<Youth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
