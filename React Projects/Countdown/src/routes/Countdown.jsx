import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";
import { CountDownContext } from "../context/CountDownContenxt";
import styles from "../styles/Countdown.module.css";

const Countdown = () => {
  const { event } = useContext(CountDownContext);
  const [days, hours, minutes, seconds] = useCountdown(event.date);
  const eventTitle = event.title;
  const eventColor = event.color;

  if (!event) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className={styles.countDownContainer}>
        <Counter title={"Dias"} number={days} eventColor={eventColor} />
        <Counter title={"Horas"} number={hours} eventColor={eventColor} />
        <Counter title={"Minutos"} number={minutes} eventColor={eventColor} />
        <Counter title={"Segundos"} number={seconds} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
