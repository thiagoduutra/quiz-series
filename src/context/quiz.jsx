import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialStage = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        //pega o state total para pegar o STAGE inicial também
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!questions[nextQuestion]) endGame = true;
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      };

    case "NEW_GAME":
      return initialStage;

    default:
      return state;
  }
};

//Context: onde consome
export const QuizContext = createContext();

//children: consegue ter componentes dentro de componentes
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
