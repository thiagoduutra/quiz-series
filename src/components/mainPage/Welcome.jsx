import React from "react";
import Quiz from "../../img/quiz.png";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="container-welcome">
      <h2 className="subTitle">Seja Bem-vindo</h2>
      <p className="paragraph">Clique no botão abaixo para começar</p>
      <button className="btn">Iniciar</button>
      <div className="container-img">
        <img src={Quiz} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
