import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setAnswer(eval(question) || Math.error);
        setQuestion("");
      } catch {
        setAnswer("Math error");
      }
    } else if (value === "C") {
      setQuestion("");
      setAnswer("");
    } else {
      setQuestion(question + value);
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
      <h2>React Calculator</h2>

      <div className="screen">
        <input type="text" value={question} readOnly />
        <input type="text" value={answer} readOnly />
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
