import styles from "./styles/operationsMap.module.css";
import axios from "axios";
import ModifyOperation from "./ModifyOperation";
import { useState } from "react";
export default function OperationsMap({ cOperations, stateUpdate }) {
  const [dataToModify, setDataToModify] = useState();
  const [modal, setModal] = useState(false);
  const handledDelete = (e, id) => {
    axios.delete(`http://localhost:3001/deleteOperation/${id}`);
    window.location.reload();
  };
  const handledModify = (e, data) => {
    setDataToModify(data);
    setModal(!modal);
  };
  if (!stateUpdate) {
    return (
      <tr>
        <td></td>
        <td className={styles.loader} />
      </tr>
    );
  } else {
    return (
      <tbody>
        <ModifyOperation
          dataToModify={dataToModify}
          modal={modal}
          setModal={setModal}
        />
        {cOperations?.map(({ id, concept, amount, date, type }) => {
          return (
            <tr
              className={
                type === "income" ? styles.td_income : styles.td_expense
              }
              key={id}
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
              <td>
                <button
                  className={styles.btn_modify}
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

                <button
                  className={styles.btn_delete}
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
    );
  }
}
