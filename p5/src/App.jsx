import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setAnswer(eval(Question) || Math.error);
        setQuestion("");
      } catch {
        setAnswer("Math error");
      }
    } else if (value === "C") {
      setQuestion("");
      setAnswer("");
    } else {
      setQuestion(Question + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "C",
    "+",
    "=",
  ];

  return (
    <div className="calculator">
      <h2>React Calucaltor</h2>

      <div className="screen">
        <input type="text" value={Question} readOnly />
        <input type="text" value={Answer} readOnly />
      </div>

      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
