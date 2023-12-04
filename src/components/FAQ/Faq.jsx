import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

import faqData from "../../data/faq";

import styles from "./Faq.module.css";

import { scrollToSection } from "../../services/scrfollToSection";

const Faq = () => {
  const [selected, setSelected] = useState("1");

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  };

  return (
    <section id="faq" className={styles["wrapper-faq"]}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <ul className={styles.list}>
        {faqData.map(({ id, question, answer }) => (
          <li key={id} onClick={() => toggle(id)} className={styles.item}>
            <div className={styles["wrapper-question"]}>
              <span className={selected === id ? styles.minus : styles.plus}>
                {selected === id ? <FaMinus /> : <FaPlus />}
              </span>
              <h2 className={styles.question}>{question}</h2>
            </div>
            {selected === id && <p className={styles.text}>{answer}</p>}
          </li>
        ))}
      </ul>
      <div className={styles["contact-block"]}>
        <h3 className={styles.subtitle}>
          Didn't find the answer to your question?{" "}
        </h3>
        <button
          type="button"
          className={styles.button}
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Faq;
