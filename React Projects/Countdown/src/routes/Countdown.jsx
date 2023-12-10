import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import styles from "../styles/Countdown.module.css";

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown();
  return (
    <>
      <Title title="Contagem regressiva para 2024" />
      <div className={styles.countDownContainer}>
        <Counter title={"Dias"} number={days} />
        <Counter title={"Horas"} number={hours} />
        <Counter title={"Minutos"} number={minutes} />
        <Counter title={"Segundos"} number={seconds} />
      </div>
    </>
  );
};

export default Countdown;
