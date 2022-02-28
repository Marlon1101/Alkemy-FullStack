import styles from "./styles/home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import LastTenOperations from "./LastTenOperations";
import Nav from "../Nav/Nav";

export default function Home() {
  const [balance, setBalance] = useState("");
  useEffect(() => {
    if (!balance) {
      axios
        .get("http://localhost:3001/getBalance")
        .then((res) => setBalance(res.data));
    }
  });

  return (
    <div className={styles.background}>
      <Nav
        elements={[
          {
            path: "/registerOperation",
            text: "Register Operation"
          },
          {
            path: "/OperationsList",
            text: "Operations List"
          },
        ]}
        position={"center"}
      />
      <div className={styles.container}>
        <div className={styles.container_balance}>
          <h1 className={styles.title_balance}>Balance</h1>
          <h1 className={styles.balance}>{balance}</h1>
        </div>
        <LastTenOperations />
      </div>
    </div>
  );
}
