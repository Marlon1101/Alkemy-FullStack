import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import FormToRegisterOperations from "./components/FormToRegisterOperations/FormToRegisterOperations";
import OperationsList from "./components/OperationsList/OperationsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerOperation" element={<FormToRegisterOperations />} />
        <Route path="/OperationsList" element={<OperationsList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
