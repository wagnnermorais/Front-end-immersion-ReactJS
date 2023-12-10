import { Outlet } from "react-router-dom";
import background from "./assets/main-background.jpg";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div
      className={styles.app}
      style={{ backgroundImage: `url(${background}` }}
    >
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
