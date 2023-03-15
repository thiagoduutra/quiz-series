import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Question.scss";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div className="container-question">
      <p className="paragraph">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="subTitle">{currentQuestion.question}</h2>
      <div className="container-options">
        <p className="paragraph">Opções</p>
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
      </button>
    </div>
  );
};

export default Question;
