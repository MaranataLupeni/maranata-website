import "../styles/footer.scss";
import logo from "../assets/images/logo-text.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="logo-motto">
        <img src={logo} alt="Maranata Logo" />
        <h2>MARANATA DOMNUL NOSTRU VINE</h2>
      </div>

      <hr style={{ opacity: "0.4" }} />

      <div className="contact-social">
        <div className="contact">
          <h2>CONTACTEAZĂ-NE</h2>
          <a href="https://goo.gl/maps/8JHKf79zJp5Z19Km8" target={"_blank"}>
            B-dul Păcii, nr. 2
          </a>
          <a href="mailto:maranatalupeni2021@gmail.com">
            maranatalupeni2021@gmail.com
          </a>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/groups/153223238693429/?locale=ro_RO"
                target={"_blank"}
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@bisericamaranatalupeni9430"
                target={"_blank"}
              >
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-solid fa-link" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p>Copyright {year}, Maranata Lupeni. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
