import { createContext, useReducer } from "react";
import questions from "../../data/questions";

const stages = ["Start", "Playing", "End"];

const initialState = {
  gameStage: stages[0],
  questions,
};

const quizReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "change_state":
      return state;

    default:
      state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
