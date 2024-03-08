import { useState } from "react";

export default function App() {
  return (
   <Counter />
  );
}

function Counter(){
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  let dayString;
  if(count === 0){
    dayString = `Today is `;
  }else if(count > 0){
    dayString = `${count} days from today is `;
  }else if(count < 0){
    dayString = `${count} days ago was `;
  }

  const handleReset = () => {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <button onClick={() => setStep(currentStep => currentStep - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep(currentStep => currentStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(currentCount => currentCount - step)}>-</button>
        <span>Count : {count}</span>
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => setCount(currentCount => currentCount + step)}>+</button>
        <p>
          <span>{dayString}</span>
          <span>{date.toDateString()}</span>
          <span></span>
        </p>
        {(count !== 0 || step !== 1) ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}