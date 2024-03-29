import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/mainPage/Welcome";
import Category from "./components/ChooseSeries/Category";
import Question from "./components/Questions/Question";
import Gameover from "./components/Gameover/Gameover";

import "../src/style/style.scss";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1 className="title-main">Quiz Séries</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <Category />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <Gameover />}
    </div>
  );
}

export default App;
