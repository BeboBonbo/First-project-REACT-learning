import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { add, subtract, multiple, divide } from "./features/calcs/calcSlice";

function App() {
  const resultState = useSelector((state) => {
    return state.calc.result;
  });

  const dispatch = useDispatch();

  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");
  const [result, setResult] = useState("");

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(
      add({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
    // const result = Number(firstNumberInput) + Number(secondNumberInput);
    // setResult(result);
  }

  function handleSubClick() {
    dispatch(
      subtract({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
    // const result = Number(firstNumberInput) - Number(secondNumberInput);
    // setResult(result);
  }

  function handleMultClick() {
    dispatch(
      multiple({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
    // const result = Number(firstNumberInput) * Number(secondNumberInput);
    // setResult(result);
  }

  function handleDivClick() {
    dispatch(
      divide({
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      })
    );
    // const result = Number(firstNumberInput) / Number(secondNumberInput);
    // setResult(result);
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultState}</h2>
      </div>
    </div>
  );
}

export default App;
