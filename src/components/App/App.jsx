import Btn from "components/Btn/Btn";
import Display from "components/Display/Display";
import { useState, useEffect } from "react";

import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

const App = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

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
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleResume = () => {
    setTimeout(() => {
      handleStart();
      setStart(false);
    }, 300);
  };

  const handleStop = () => {
    if (time !== 0) {
      setStart(false);
      setTime(0);
    }
  };

  const handleReset = () => {
    setTime(0);
    setStart(true);
  };

  return (
    <div className="stopwatch">
      <Display time={time} />
      <Btn
        handleStart={handleStart}
        handleReset={handleReset}
        handleResume={handleResume}
        handleStop={handleStop}
      />
    </div>
  );
};

export default App;
