import React, { useState } from "react";
import "./App.css";
import Result from "./components/result";
import Keypad from "./components/keypad";

const App = (props) => {
  const [result, setResult] = useState("");

  const onClick = (btn) => {
    if (btn === "=") {
      calculation();
    } else if (btn === "AC") {
      cancel();
    } else if (btn === "C") {
      back();
    } else {
      setResult(result + btn);
    }
  };

  const calculation = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("ERROR");
    }
  };

  const back = () => {
    setResult(result.slice(0, -1));
  };

  const cancel = () => {
    setResult("");
  };

  return (
    <div>
      <div className="calculator__container">
        <h1>Simple React Calculator</h1>
        <Result result={result} />
        <Keypad onClick={onClick} />
      </div>
    </div>
  );
};

export default App;
