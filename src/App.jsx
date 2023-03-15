import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/mainPage/Welcome";
import Question from "./components/Questions/Question";
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
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
