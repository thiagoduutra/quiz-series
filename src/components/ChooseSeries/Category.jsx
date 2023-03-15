import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import choose from "../../img/choose.png";
import "./Category.scss";

const Category = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategory(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="container-category">
      <h2 className="subTitle">Escolha uma categoria:</h2>
      <p className="paragraph">
        As perguntas serão referentes as series abaixo:
      </p>
      <div className="container-btn">
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategory(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>

      <div className="container-img">
        <img src={choose} alt="Categoria do Quiz" />
      </div>
    </div>
  );
};

export default Category;
