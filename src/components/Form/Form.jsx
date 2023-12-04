import { useState } from "react";
import { nanoid } from "nanoid";
import { validateForm } from "../../services/validateForm";

import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const submitData = (e) => {
    e.preventDefault();

    if (!validateForm(name, email, tel, setErrors)) return;

    setName("");
    setTel("");
    setEmail("");
    setMessage("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const telInputId = nanoid();
  const messageInputId = nanoid();

  return (
    <>
      <form onSubmit={submitData} className={styles.form}>
        <div>
          <div
            className={`${styles["form-element"]} ${
              errors.name ? styles.error : ""
            }`}
          >
            <label
              htmlFor={nameInputId}
              className={styles["form-element-label"]}
            >
              <sup>&#42;</sup> Full name:
            </label>
            <input
              id={nameInputId}
              className={styles["form-element-input"]}
              type="text"
              name="name"
              value={name}
              placeholder="John Rosie"
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className={styles.wrong}>{errors.name}</p>}
        </div>

        <div>
          <div
            className={`${styles["form-element"]} ${
              errors.email ? styles.error : ""
            }`}
          >
            <label
              htmlFor={emailInputId}
              className={styles["form-element-label"]}
            >
              <sup>&#42;</sup> E-mail:
            </label>
            <input
              id={emailInputId}
              className={styles["form-element-input"]}
              type="text"
              name="email"
              value={email}
              placeholder="johnrosie@gmail.com"
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className={styles.wrong}>{errors.email}</p>}
        </div>

        <div>
          <div
            className={`${styles["form-element"]} ${
              errors.tel ? styles.error : ""
            }`}
          >
            <label
              htmlFor={telInputId}
              className={styles["form-element-label"]}
            >
              <sup>&#42;</sup> Phone:
            </label>
            <input
              id={telInputId}
              className={styles["form-element-input"]}
              type="tel"
              name="tel"
              value={tel}
              placeholder="+380961234567"
              onChange={handleChange}
            />
          </div>
          {errors.tel && <p className={styles.wrong}>{errors.tel}</p>}
        </div>

        <div className={styles["form-element"]}>
          <label
            htmlFor={messageInputId}
            className={styles["form-element-label"]}
          >
            Message:
          </label>
          <textarea
            id={messageInputId}
            className={styles["form-element-comments"]}
            type="text"
            value={message}
            name="message"
            placeholder="My message...."
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles["form-button"]}>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
