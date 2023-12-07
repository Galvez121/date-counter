import "./index.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  function addStep() {
    setStep((s) => s + 1);
  }
  function lessStep() {
    setStep((s) => s - 1);
  }

  const [count, setCount] = useState(0);
  function addCount() {
    setCount((s) => s + step);
  }
  function lessCount() {
    setCount((s) => s - step);
  }

  function resetValues() {
    setCount(0);
    setStep(1);
  }

  // Date function
  const date = new Date("11/14/2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={lessCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={addCount}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={resetValues}>Reset</button>
      </div>
    </>
  );
}
