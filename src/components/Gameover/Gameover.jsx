import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import end from "../../img/fim.png";

import "./Gameover.scss";

const Gameover = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="container-gameover">
      <h2 className="subTitle">Fim de Jogo!!</h2>
      <p className="paragraph">Pontuação: {quizState.score}</p>
      <p className="paragraph">
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <div className="container-img">
        <img src={end} alt="Imagem do fim do quiz" />
      </div>
      <button
        onClick={() => dispatch({ type: "NEW_GAME" })}
        className="btn-gameover"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Gameover;
