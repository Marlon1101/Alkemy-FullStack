import styles from "./styles/nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ elements, position }) {
  return (
    <nav style={{ justifyContent: position }} className={styles.nav}>
      <div className={styles.container_links}>
        {elements.map(({ path, text }) => {
          return (
            <Link className={styles.link} to={path}>
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
