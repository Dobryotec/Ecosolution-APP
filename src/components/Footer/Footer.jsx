import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";

import { scrollToSection } from "../../services/scrfollToSection";
import logo from "../../assets/logo.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["first-block"]}>
        <img
          src={logo}
          className={styles.logo}
          onClick={() => scrollToSection("main")}
        />
        <ul className={styles["social-list"]}>
          <li className={styles["social-item"]}>
            <a
              className={styles["social-link"]}
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaSquareFacebook />
            </a>
          </li>
          <li className={styles["social-item"]}>
            <a
              className={styles["social-link"]}
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {" "}
              <FaInstagram />
            </a>
          </li>
        </ul>

        <div
          className={styles["wrapper-image"]}
          onClick={() => scrollToSection("main")}
        >
          <IoIosArrowRoundUp />
        </div>
      </div>

      <div className={styles["second-block"]}>
        <a
          href="https://maps.app.goo.gl/Di8xyYhPLi9x6yZ87"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com" className={styles.link}>
          office@ecosolution.com
        </a>
        <p className={styles.link}>
          ecosolution <sup>&#169;</sup> 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
