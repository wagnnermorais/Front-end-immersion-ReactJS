import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    console.log(eventObject);
  };

  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Monte a sua contagem regressiva!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelTitle}>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento."
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelTitle}>Data:</span>
          <input
            type="date"
            name="title"
            className={styles.input}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelTitle}>Imagem</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem."
            className={styles.input}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelTitle}>Cor do tema:</span>
          <input
            type="color"
            name="color"
            className={styles.input}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" className={styles.input} />
      </form>
    </div>
  );
};

export default Home;
