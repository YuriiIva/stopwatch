import React from "react";

const Btn = ({ handleStart, handleReset, handleResume, handleStop }) => {
  return (
    <>
      <button type="button" onClick={handleStart} className="btn">
        START
      </button>

      <button type="button" onClick={handleStop} className="btn">
        STOP
      </button>
      <button type="button" className="btn" onDoubleClick={handleResume}>
        Wait
      </button>
      <button type="button" onClick={handleReset} className="btn">
        Reset
      </button>
    </>
  );
};

export default Btn;
