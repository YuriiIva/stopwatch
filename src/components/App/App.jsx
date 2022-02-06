import Btn from "components/Btn/Btn";
import Display from "components/Display/Display";
import { useState, useEffect } from "react";

import { interval, Subject } from "rxjs";
import { takeUntil, delay } from "rxjs/operators";

const App = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();
    console.log(`unsubscribe`, unsubscribe);

    interval(1000)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (start) {
          setTime((prevTime) => prevTime + 1000);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };

    // let interval = null;

    // if (start) {
    //   setStatus(0);

    //   interval = setInterval(() => {
    //     setTime((prevTime) => prevTime + 1000);
    //   }, 1000);
    // } else {
    //   clearInterval(interval);
    //   setStatus(1);
    // }
    // return () => clearInterval(interval);
  }, [start]);

  const handleStart = () => {
    start === true ? setStart(false) : setStart(true);
    setStatus(1);
  };

  const handleResume = () => {
    handleStart();
  };

  const handleStop = () => {
    if (time !== 0) {
      setStart(false);
      setTime(0);
    }
    setStatus(0);
  };

  const handleReset = () => {
    setTime(0);
    setStart(false);
    setStatus(0);
  };

  return (
    <div className="stopwatch">
      <Display time={time} />
      <Btn
        status={status}
        handleStart={handleStart}
        handleReset={handleReset}
        handleResume={handleResume}
        handleStop={handleStop}
      />
    </div>
  );
};

export default App;
