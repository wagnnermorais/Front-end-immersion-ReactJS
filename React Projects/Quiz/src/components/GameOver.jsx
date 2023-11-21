import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "../styles/GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src="./welldone.svg" alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
