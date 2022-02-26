import "./styles/home.sass";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LastTenOperations from "./LastTenOperations";

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
    <div className="value">
      <Link to="/registerOperation">Register Operation</Link>
      <Link to="/OperationsList">Operations List</Link>
      <h1>Balance</h1>
      <h1>{balance}</h1>
      <LastTenOperations />
    </div>
  );
}
