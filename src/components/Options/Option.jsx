import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Option.scss";

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="container-option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  );
};

export default Option;
