import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CountDownContext } from "./context/CountDownContenxt";
import background from "./assets/main-background.jpg";
import styles from "./styles/App.module.css";

function App() {
  const { event } = useContext(CountDownContext);
  let eventImage = null;

  if (event) {
    eventImage = event.image;
  }
  return (
    <div
      className={styles.app}
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : {
              backgroundImage: `url(${background}`,
            }
      }
    >
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
