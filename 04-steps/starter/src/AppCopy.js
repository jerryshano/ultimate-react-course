import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function AppCopy() {
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
          {/* <p className="message">
            Step: {step} {messages[step - 1]}
          </p> */}
          <StepMessage step={step} messages={messages}>
            {messages[0]}
          </StepMessage>
          <div className="buttons">
            <Button
              onClick={decrement}
              bgColor={"#3e92c9"}
              textColor={"fff"}
              text={"prev"}
            >
              <span>💁</span>Prev
            </Button>
            <Button
              onClick={increment}
              bgColor={"#61c780"}
              textColor={"fff"}
              text={"next"}
            >
              Next <span>👠</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default AppCopy;

function StepMessage({ step, messages, children }) {
  return (
    <div className="message">
      <h3> Step: {step} </h3>
      {children}
    </div>
  );
}
function Button({ onClick, bgColor, textColor, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
