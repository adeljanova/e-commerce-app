import { useState } from "react";

const Button = () => {
  const [message, setMessage] = useState(false);
  const clickHandler = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };
  return (
    <div>
      <button onClick={clickHandler}>Add to cart</button>
      {message && (
        <div className="button-message-container">
          <p className="button-message">Item added successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Button;
