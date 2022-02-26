import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/modifyOperation.sass";
import Input from "../FormToRegisterOperations/Input";

export default function ModifyOperation({ dataToModify, modal, setModal }) {
  const { id, concept, amount, date } = dataToModify ? dataToModify : "";
  const [input, setInput] = useState();
  useEffect(() => {
    setInput(dataToModify);
  }, [dataToModify]);
  const handledModify = () => {
    axios.put("http://localhost:3001/updateOperation", input);
    setModal(!modal);
    window.location.reload();
  };
  return (
    <div className="container">
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal_content">
              <Input
                type="text"
                label="Concept:"
                name="concept"
                value={concept}
                input={input}
                setInput={setInput}
              />
              <Input
                type="number"
                label="Amount:"
                name="amount"
                value={amount}
                input={input}
                setInput={setInput}
              />
              <Input
                type="date"
                label="Date:"
                name="date"
                value={date}
                input={input}
                setInput={setInput}
              />
              <button className="btnModify" onClick={handledModify}>
                Modify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
