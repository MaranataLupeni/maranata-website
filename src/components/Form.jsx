import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ImageComponent from "./ImageComponent";
import emailjs from "@emailjs/browser";

import img from "../assets/images/logo-text-black.png";
import "../styles/form.scss";
import "animate.css";

const Form = (props) => {
  const { formPurpose, placeholder, handleFormOpen, handleMenuOpen } = props;

  const [formData, setFormData] = useState({
    prayerReq: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [shownInputs, setShownInputs] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (target) => {
    if (typeof target === "object")
      if ([formData[target[0]], formData[target[1]]].includes("")) return;
    if (formData[target] === "") return;
    setShownInputs((prev) => (prev += 1));
  };

  const submitPrayerForm = (e) => {
    e.preventDefault();
    console.log(
      "template_" + (formPurpose === "prayer" ? "rugaciune" : "contact")
    );

    emailjs
      .send(
        "service_maranata",
        "template_" + (formPurpose === "prayer" ? "rugaciune" : "contact"),
        formData,
        "YfL-buIwOMukhfpB5"
      )
      .then(() => {
        setShownInputs("checkmark");
      });
  };

  return (
    <div className="form-container animate__animated animate__slideInRight animate__faster">
      <div className="controls">
        <h1 style={{ fontWeight: "bolder" }}>
          <b>{formPurpose}</b>
        </h1>
        <button
          onClick={() => {
            const form = document.querySelector(".form-container");
            form.classList.remove("animate__slideInRight");
            form.classList.add("animate__slideOutRight");

            handleMenuOpen(false);
            setTimeout(() => handleFormOpen(false), 600);
          }}
          style={{ color: "#757575", cursor: "pointer" }}
        >
          Închide
        </button>
      </div>

      <ImageComponent
        src={img}
        hash=";KS6PlWBxuxu-;xuofayofofofj[j[ayj[j[WBWB~qWBRjj[M{WBWBj[WBxuRjWBayj[WBayt7t7M{xuofM{M{WBofoffQayt7ofWBWBofofRjRjRjM{ayt7xuj[WBayof%MRjWBt7j[WBWBofof"
      />

      <form onSubmit={submitPrayerForm}>
        {shownInputs === 1 && (
          <div className="input-container">
            <label htmlFor="prayerReq">
              {formPurpose === "Rugaciune"
                ? "Ce motiv de rugăciune ai?"
                : "Trimite-ne un email cu gândurile tale"}
            </label>
            <textarea
              value={formData.prayerReq}
              onChange={handleChange}
              name="prayerReq"
              placeholder={placeholder}
              required
            />
            <button onClick={() => handleClick("prayerReq")}>Continuă</button>
          </div>
        )}

        {shownInputs === 2 && (
          <div className="input-container animate__animated animate__slideInRight">
            <label htmlFor="firstName">Cum te numești?</label>
            <div className="names">
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="Nume"
                required
              />
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Prenume"
                required
              />
            </div>
            <button onClick={() => handleClick(["lastName", "firstName"])}>
              Continuă
            </button>
          </div>
        )}
        {shownInputs === 3 && (
          <div className="input-container animate__animated animate__slideInRight">
            <label htmlFor="email">Email (opțional)</label>
            <textarea
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="email"
            />
            <button type="submit">Trimite</button>
          </div>
        )}
        {shownInputs === "checkmark" && <div className="checkmark"></div>}
      </form>
      <hr className="progress-bar" />
      <hr
        className="progress-value"
        style={{ width: `${(shownInputs / 3) * 100 - 40}%` }}
      />
    </div>
  );
};

export default Form;
