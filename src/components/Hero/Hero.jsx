import { scrollToSection } from "../../services/scrfollToSection";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/energy.jpg";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className={styles["description-block"]}>
          <h1 className={styles["hero-title"]}>
            RENEWABLE ENERGY For any task
          </h1>
          <div className={styles["hero-content"]}>
            <p className={styles["hero-description"]}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <button
              type="button"
              className={styles["hero-button"]}
              onClick={() => scrollToSection("cases")}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className={styles["wrapper-address"]}>
          <address className={styles["hero-address"]}>
            <a
              href="https://maps.app.goo.gl/Di8xyYhPLi9x6yZ87"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={styles["hero-link"]}
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
            <a
              href="mailto:office@ecosolution.com"
              className={styles["hero-link"]}
            >
              office@ecosolution.com
            </a>
            <p className={styles["hero-text"]}>
              ecosolution <sup>&#169;</sup> 2023
            </p>
          </address>
        </div>
        <div>
          <div className={styles["hero-image"]}>
            <img
              className={styles["hero-image-element"]}
              src={HeroImage}
              alt="wind turbine clean energy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
