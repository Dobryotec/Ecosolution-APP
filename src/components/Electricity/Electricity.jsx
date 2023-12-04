import { useState, useEffect } from "react";
import { formattedNumber } from "../../services/formattedNumber";

import styles from "./Electricity.module.css";

const Electricity = () => {
  const [number, setNumber] = useState(1_134_147_814);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className={styles.title}>Electricity we produced for all time</h2>
      <div className={styles.text}>
        <span className={styles.counter}>{formattedNumber(number)}</span>{" "}
        <span className={styles.units}>kWh</span>
      </div>
    </section>
  );
};

export default Electricity;
