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

  // Date function
  const date = new Date("11/14/2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={lessStep}>-</button> <p>Step: {step}</p>
        <button onClick={addStep}>+</button>
      </div>
      <div>
        <button onClick={lessCount}>-</button> <p>Count: {count}</p>
        <button onClick={addCount}>+</button>
      </div>
      <p>{date.toDateString()}</p>
    </>
  );
}
