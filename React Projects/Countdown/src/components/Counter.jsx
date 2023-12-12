import styles from "../styles/Counter.module.css";

const Counter = ({ title, number, eventColor }) => {
  return (
    <div className={styles.counter}>
      <h3 className={styles.counterNumber} style={{ background: eventColor }}>
        {number}
      </h3>
      <p className={styles.counterText} style={{ color: eventColor }}>
        {title}
      </p>
    </div>
  );
};

export default Counter;
