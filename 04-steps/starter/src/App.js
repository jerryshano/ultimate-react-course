import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function decrement() {
    if (step > 1) setStep((s) => s - 1);
  }
  function increment() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step: {step} {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={decrement} style={{ backgroundColor: "#7950f2" }}>
              previous
            </button>
            <button onClick={increment} style={{ backgroundColor: "#7950f2" }}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
