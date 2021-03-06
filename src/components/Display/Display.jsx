import React from "react";

const Display = ({ time }) => {
  return (
    <div className="tabl">
      <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Display;
