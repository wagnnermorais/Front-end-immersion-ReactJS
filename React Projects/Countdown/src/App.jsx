import Title from "./components/Title";
import Counter from "./components/Counter";
import background from "./assets/main-background.jpg";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div
      className={styles.app}
      style={{ backgroundImage: `url(${background}` }}
    >
      <div className={styles.container}>
        <Title title="Contagem regressiva para 2024" />
        <div className={styles.countDownContainer}>
          <Counter title={"Dias"} number={2} />
          <Counter title={"Horas"} number={2} />
          <Counter title={"Minutos"} number={2} />
          <Counter title={"Segundos"} number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
