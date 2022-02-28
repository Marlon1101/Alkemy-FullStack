import styles from "./styles/lastTenOperations.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LastTenOperations() {
  const [lastOperations, setLastOperations] = useState();
  useEffect(() => {
    if (!lastOperations) {
      axios
        .get("http://localhost:3001/getLastTenOperations")
        .then((res) => setLastOperations(res.data));
    }
  });
  return (
    <div className={styles.container_table}>
      <h3>LAST TEN OPERATIONS</h3>
      <table>
        <thead>
          <tr className={styles.th}>
            <th>CONCEPT</th>
            <th>AMOUNT</th>
            <th>DATE</th>
            <th>TYPE</th>
          </tr>
        </thead>

        <tbody>
          {lastOperations?.map(({ concept, amount, date, type }) => {
            return (
              <tr
                className={
                  type === "income" ? styles.td_income : styles.td_expense
                }
              >
                <td>{concept}</td>
                <td>
                  {amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{date}</td>
                <td>{type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
