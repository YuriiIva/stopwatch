import { useState, useEffect } from "react";

const App = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  const [status, setStatus] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start) {
      setStatus(0);

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
      setStatus(1);
    }
    return () => clearInterval(interval);
  }, [start]);

  const toggleBtn = () => {
    start === true ? setStart(false) : setStart(true);
    // setTime(0);
  };

  const reset = () => {
    setTime(0);
    setStatus(0);
  };

  return (
    <div className="stopwatch">
      <div className="tabl">
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <button type="button" onClick={toggleBtn} className="btn">
          {status === 1 ? "START" : "STOP"}
        </button>

        <button type="button" onClick={() => setStart(false)} className="btn">
          Wait
        </button>
      </div>
      <button type="button" onClick={reset} className="btn">
        Reset
      </button>
    </div>
  );
};

export default App;
