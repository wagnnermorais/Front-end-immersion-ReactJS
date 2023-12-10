import styles from "../styles/Counter.module.css";

const Counter = ({ title, number }) => {
  return (
    <div className={styles.counter}>
      <h3 className={styles.counterNumber}>{number}</h3>
      <p className={styles.counterText}>{title}</p>
    </div>
  );
};

export default Counter;
