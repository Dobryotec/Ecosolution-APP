import circle from "../../assets/circle.svg";
import global from "../../assets/global.svg";
import cpu from "../../assets/cpu.svg";
import ranking from "../../assets/ranking.svg";
import workers from "../../assets/workers.jpg";
import worker from "../../assets/worker.jpg";

import styles from "./Values.module.css";

const Values = () => {
  return (
    <section id="about" className={styles["section-values"]}>
      <div className={styles.description}>
        <h2 className={styles.title}>Main values of our company</h2>
        <p className={styles.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <div className={styles["values-block"]}>
        <div className={styles.item}>
          <div className={styles.subtitle}>
            <img src={circle} />
            <span>Openness</span>
          </div>
          <p className={styles.content}>
            to the world, people, new ideas and projects
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>
            <img src={global} />
            <span>Responsibility</span>
          </div>
          <p className={styles.content}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <div className={`${styles.image} ${styles["upper-block"]}`}>
          <img src={workers} alt="workers image" />
        </div>

        <div className={`${styles.image} ${styles["lower-block"]}`}>
          <img src={worker} alt="worker image" />
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>
            <img src={cpu} />
            <span>Innovation</span>
          </div>
          <p className={styles.content}>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>
            <img src={ranking} />
            <span>Quality</span>
          </div>
          <p className={styles.content}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
