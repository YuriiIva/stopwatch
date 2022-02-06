import React from "react";
import { takeUntil, delay } from "rxjs/operators";

const Btn = ({
  status,
  handleStart,
  handleReset,
  handleResume,
  handleStop,
}) => {
  return (
    <div>
      <div>
        {status === 0 && (
          <button type="button" onClick={handleStart} className="btn">
            START
          </button>
        )}
        {status === 1 && (
          <div>
            <button type="button" onClick={handleStop} className="btn">
              STOP
            </button>
            <button
              type="button"
              // onClick={() => delay(300).handleResume}
              onClick={() => delay(300).handleResume}
              className="btn"
            >
              Wait
            </button>
            <button type="button" onClick={handleReset} className="btn">
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Btn;
