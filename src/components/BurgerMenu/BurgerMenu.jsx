import { IoMdClose } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import { useActiveLinkContext } from "../../services/context";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ handleMenu, isOpenMenu }) => {
  const { activeLink, setAndSaveActiveLink } = useActiveLinkContext();

  const scrollToBlock = (name) => {
    const menuElement = document.getElementById(name);
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
      setAndSaveActiveLink(name);
    }
    handleMenu();
  };

  return (
    <>
      {isOpenMenu && (
        <div className={styles["overlay"]} onClick={() => handleMenu()} />
      )}
      <div className={styles["burger-menu-container"]}>
        <div className={styles["close-wrapper"]}>
          <IoMdClose onClick={handleMenu} />
          <span className={styles["close-text"]}>close</span>
        </div>
        <nav className={styles["menu-flex-container"]}>
          <ul className={styles["menu-list"]}>
            <li
              className={`${styles["menu-item"]} ${
                activeLink === "main" ? styles.active : ""
              }`}
              onClick={() => scrollToBlock("main")}
            >
              Main
              <GoArrowUpRight />
            </li>
            <li
              className={`${styles["menu-item"]} ${
                activeLink === "about" ? styles.active : ""
              }`}
              onClick={() => scrollToBlock("about")}
            >
              About
              <GoArrowUpRight />
            </li>
            <li
              className={`${styles["menu-item"]} ${
                activeLink === "cases" ? styles.active : ""
              }`}
              onClick={() => scrollToBlock("cases")}
            >
              Cases
              <GoArrowUpRight />
            </li>
            <li
              className={`${styles["menu-item"]} ${
                activeLink === "faq" ? styles.active : ""
              }`}
              onClick={() => scrollToBlock("faq")}
            >
              FAQ
              <GoArrowUpRight />
            </li>
            <li
              className={`${styles["menu-item"]} ${
                activeLink === "contact" ? styles.active : ""
              }`}
              onClick={() => scrollToBlock("contact")}
            >
              Contact Us
              <GoArrowUpRight />
            </li>
          </ul>
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
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
