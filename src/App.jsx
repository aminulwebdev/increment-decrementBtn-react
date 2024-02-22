import { useState } from "react";
import Logo from "./assets/images/mak_logo.png";

const App = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    count++;
    setCount(count);
  };

  const handleDecrement = () => {
    count--;
    setCount(count);
  };

  return (
    <>
      <div className="container ">
        <div className="counter">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {count >= 10 ? (
            <button className="btn disable">Increment</button>
          ) : (
            <button onClick={handleIncrement} className="btn clicked">
              Increment
            </button>
          )}

          <div className="output">
            <p>Count: {count} </p>
          </div>

          {count <= 0 ? (
            <button className="btn disable">Decrement</button>
          ) : (
            <button onClick={handleDecrement} className="btn clicked">
              Decrement
            </button>
          )}
          
        </div>
      </div>
    </>
  );
};

export default App;
