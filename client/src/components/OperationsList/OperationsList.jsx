import { useState, useEffect } from "react";
import ModifyOperation from "./ModifyOperation";
import axios from "axios";
import "./styles/operationsList.sass";

export default function OperationsList() {
  const [modal, setModal] = useState(false);
  const [typeOperation, setTypeOperations] = useState("All");
  const [operations, setOperations] = useState();
  const [flag, setFlag] = useState(false);
  const [dataToModify, setDataToModify] = useState();
  useEffect(() => {
    if (!flag) {
      axios
        .get(
          `http://localhost:3001/${
            typeOperation === "Incomes"
              ? "getIncomes"
              : typeOperation === "Expenses"
              ? "getExpenses"
              : "getOperations"
          }`
        )
        .then((res) => {
          setOperations(res.data);
          setFlag(!flag);
        });
    }
  });

  const onChangeTypeOperation = (e) => {
    e.preventDefault();
    setTypeOperations(e.target.value);
    setFlag(!flag);
  };

  const handledDelete = (e, id) => {
    axios.delete(`http://localhost:3001/deleteOperation/${id}`);
    window.location.reload();
  };
  const handledModify = (e, data) => {
    setDataToModify(data);
    setModal(!modal);
  };
  return (
    <div>
      <ModifyOperation
        dataToModify={dataToModify}
        modal={modal}
        setModal={setModal}
      />
      <select onChange={(e) => onChangeTypeOperation(e)}>
        <option value="All">All</option>
        <option value="Incomes">Incomes</option>
        <option value="Expenses">Expenses</option>
      </select>
      <table>
        <thead>
          <tr className="thOL">
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {operations?.map(({ id, concept, amount, date, type }) => {
            return (
              <tr key={id} className="tdOL">
                <td>{concept}</td>
                <td>
                  {amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{date}</td>
                <td>{type}</td>
                <td>
                  <button
                    onClick={(e) =>
                      handledModify(e, {
                        id,
                        concept,
                        amount,
                        date,
                      })
                    }
                  >
                    Modify
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      handledDelete(e, id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
