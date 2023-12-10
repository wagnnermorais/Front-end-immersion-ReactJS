import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "../styles/PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const chooseCategory = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div className="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategory(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src="/category" alt="" />
    </div>
  );
};

export default PickCategory;
