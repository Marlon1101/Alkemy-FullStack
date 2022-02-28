import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles/operationsList.module.css";
import Paged from "../Paged/Paged";
import OperationsMap from "./OperationsMap.jsx";
import Nav from "../Nav/Nav.jsx";

export default function OperationsList() {
  const [typeOperation, setTypeOperations] = useState("All");
  const [operations, setOperations] = useState();
  const [flag, setFlag] = useState(false);

  /////////////////////////Paged///////////////////////////////////////
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(5);
  const iLastCountry = currentPage * countriesPerPage;
  const iFirstCountry = iLastCountry - countriesPerPage;
  const cOperations = operations?.slice(iFirstCountry, iLastCountry);
  const paged = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ///////////////////////////////////////////////////////////////////
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
          setUpdate(true);
        });
    }
  }, [operations, flag, typeOperation]);

  const onChangeTypeOperation = (e) => {
    e.preventDefault();
    setTypeOperations(e.target.value);
    setFlag(!flag);
  };
  return (
    <>
      <Nav
        elements={[
          {
            path: "/",
            text: "Home",
          },
        ]}
        position={"flex-start"}
      />
      <div className={styles.container}>
        <div className={styles.container_select}>
          <select onChange={(e) => onChangeTypeOperation(e)}>
            <option value="All">All</option>
            <option value="Incomes">Incomes</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
        <div className={styles.container_table}>
          <table>
            <thead>
              <tr className={styles.th}>
                <th>CONCEPT</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>TYPE</th>
              </tr>
            </thead>
            <OperationsMap cOperations={cOperations} stateUpdate={update} />
          </table>
          <Paged
            countriesPerPage={countriesPerPage}
            allCountries={operations?.length}
            paged={paged}
          />
        </div>
      </div>
    </>
  );
}
