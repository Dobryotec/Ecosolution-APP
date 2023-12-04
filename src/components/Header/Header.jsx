import { useState, useEffect } from "react";
import { scrollToSection } from "../../services/scrfollToSection";
import { handleScroll } from "../../services/scrollHeader";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import logo from "../../assets/Logo.svg";
import menu from "../../assets/Menu.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    return handleScroll((isScrolling) => setScrolling(isScrolling));
  }, []);

  if (isOpenMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolling : ""}`}>
      <img
        src={logo}
        className={styles["header-icon-logo"]}
        width={269}
        alt="icon-logo"
        onClick={() => scrollToSection("main")}
      />
      {!isOpenMenu ? (
        <div className={styles["header-block"]}>
          {" "}
          <div className={styles["image-wrapper"]} onClick={handleMenu}>
            <img
              src={menu}
              className={styles["header-icon-menu"]}
              alt="icon-menu"
            />
          </div>
          <button
            type="button"
            className={styles["header-button"]}
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </button>
        </div>
      ) : (
        <BurgerMenu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
      )}
    </header>
  );
};

export default Header;
