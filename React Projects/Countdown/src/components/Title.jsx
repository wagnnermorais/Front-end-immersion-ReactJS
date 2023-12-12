import styles from "../styles/Title.module.css";

const Title = ({ title, eventColor }) => {
  return (
    <h1 className={styles.title} style={{ color: eventColor }}>
      {title}
    </h1>
  );
};

export default Title;
