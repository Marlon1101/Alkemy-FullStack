import { useEffect } from "react";
import styles from "./styles/lightbox.module.css";
import { useNavigate } from "react-router-dom";

export default function Lightbox({ modal, setModal }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(!modal);
        navigate("/");
      }, 4000);
    }
  });
  return (
    <div className={styles.container}>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay}>
            <div className={styles.modal_content}>
              <h1>
                Registered operation
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
