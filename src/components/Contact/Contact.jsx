import { PiPhoneLight } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import Form from "../Form/Form";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles["section-contact"]}>
      <h2 className={styles.title}>Contact us</h2>
      <div className={styles["contact-container"]}>
        <address className={styles.address}>
          <div>
            <p className={styles.text}>Phone:</p>
            <div className={styles.contact}>
              <PiPhoneLight />
              <a href="tel:+380981234567" className={styles.link}>
                38 (098) 12 34 567
              </a>
            </div>
            <div className={styles.contact}>
              <PiPhoneLight />
              <a href="tel:+380931234567" className={styles.link}>
                38 (093) 12 34 567
              </a>
            </div>
          </div>

          <div>
            <p className={styles.text}>E-mail:</p>
            <div className={styles.contact}>
              <IoMailOutline />
              <a href="mailto:office@ecosolution.com" className={styles.link}>
                office@ecosolution.com
              </a>
            </div>
          </div>
          <div>
            <p className={styles.text}>Address:</p>
            <div className={styles.contact}>
              <FaRegMap />
              <a
                href="https://maps.app.goo.gl/Di8xyYhPLi9x6yZ87"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={styles.link}
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </div>
          </div>
          <div>
            <p className={styles.text}>Social Networks:</p>
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
          </div>
        </address>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
