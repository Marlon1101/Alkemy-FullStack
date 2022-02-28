import { useState } from "react";
import styles from "./styles/input.module.css";

export default function Input({ label, name, value, type, input, setInput }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div>
      {name !== "type" ? (
        <div className={styles.containerInput}>
          <label htmlFor={name}>{label}</label>
          <br />
          <input
            id={name}
            required={true}
            className={styles.InputNormal}
            type={type}
            name={name}
            defaultValue={value}
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      ) : (
        <div className={styles.containerInput}>
          <label htmlFor="type">Type:</label>
          <br />
          <select
            name="type"
            id="type"
            onChange={(event) => handleInputChange(event)}
            className={styles.InputNormal}
          >
            <option hidden>Choose type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      )}
    </div>
  );
}
