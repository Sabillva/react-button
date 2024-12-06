import React, { useState } from "react";
import Number from "./Number";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const predefinedNumbers = [0.245834756896, 0.53883752, 0.811938431, 0.734563406];
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * predefinedNumbers.length);
    setRandomNumber(predefinedNumbers[randomIndex]);
  };

  return (
    <div className="random">
      <button className="generate-btn" onClick={generateRandomNumber}>
        Click and see random numbers between 0-1
      </button>
      {randomNumber !== null && <Number number={randomNumber} />}
      <Modal />
    </div>
  );
};

export default App;
