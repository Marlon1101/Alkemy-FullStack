import "./styles/lastTenOperations.sass";
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
    <table>
      <thead>
        <tr className="thLTO">
          <th>Concept</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {lastOperations?.map((element) => {
          return (
            <tr className="tdLTO">
              <td>{element.concept}</td>
              <td>
                {element.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>{element.date}</td>
              <td>{element.type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
