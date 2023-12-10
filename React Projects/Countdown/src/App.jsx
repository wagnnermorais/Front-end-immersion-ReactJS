import Title from "./components/Title";
import Counter from "./components/Counter";
import background from "./assets/main-background.jpg";
import styles from "./styles/App.module.css";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [days, hours, minutes, seconds] = useCountdown("Jan 1, 2024 00:00:00");
  return (
    <div
      className={styles.app}
      style={{ backgroundImage: `url(${background}` }}
    >
      <div className={styles.container}>
        <Title title="Contagem regressiva para 2024" />
        <div className={styles.countDownContainer}>
          <Counter title={"Dias"} number={days} />
          <Counter title={"Horas"} number={hours} />
          <Counter title={"Minutos"} number={minutes} />
          <Counter title={"Segundos"} number={seconds} />
        </div>
      </div>
    </div>
  );
}

export default App;
