import React, { useState } from "react";

const StepCount = () => {
  const [index, setIndex] = useState(1);

  const handlePrev = () => {
    {
      index > 0 && setIndex(index - 1);
    }
  };

  const handleNext = () => {
    {
      index <= 4 && setIndex(index + 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>StepCount</h1>
      <div className="flex flex-row mt-20 justify-center items-center gap-4">
        <button
          className={`border-2 p-3 ${index >= 1 ? "bg-green-500" : "bg-white"}`}
        >
          Step 1
        </button>
        <button
          className={`border-2 p-3 ${index >= 2 ? "bg-green-500" : "bg-white"}`}
        >
          Step 2
        </button>
        <button
          className={`border-2 p-3 ${index >= 3 ? "bg-green-500" : "bg-white"}`}
        >
          Step 3
        </button>
        <button
          className={`border-2 p-3 ${index >= 4 ? "bg-green-500" : "bg-white"}`}
        >
          Step 4
        </button>
      </div>

      <div className="flex flex-row mt-20 justify-center items-center gap-4">
        <button className="border-2 p-3" onClick={handlePrev}>
          Prev
        </button>
        <button className="border-2 p-3" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepCount;
