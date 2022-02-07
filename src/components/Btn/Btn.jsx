import React from "react";

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
            <button type="button" className="btn" onClick={handleResume}>
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
