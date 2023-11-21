import { useContext } from "react";
import "../styles/Welcome.css";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src="/quiz.svg" alt="Início do quiz" />
    </div>
  );
};

export default Welcome;
