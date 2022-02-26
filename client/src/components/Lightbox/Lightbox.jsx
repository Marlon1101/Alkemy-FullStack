import { useEffect } from "react";
import "./styles/lightbox.sass";
import { useNavigate } from "react-router-dom";

export default function Lightbox({ modal, setModal }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(!modal);
        navigate("/")
      }, 4000);
    }
  });
  return (
    <div className="container">
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal_content">
              <h1>
                Tu información fue enviada con éxito, estaremos en contacto
                contigo
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
