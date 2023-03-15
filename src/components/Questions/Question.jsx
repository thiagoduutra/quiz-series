import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Options/Option";

import "./Question.scss";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      //enviar dados para o reducer
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="container-question">
      <p className="paragraph">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="subTitle">{currentQuestion.question}</h2>
      <div className="container-options">
        {currentQuestion.options.map((option) => (
          <Option
            key={option}
            option={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
