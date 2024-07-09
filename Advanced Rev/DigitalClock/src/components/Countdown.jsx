import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    {
      start &&
        time > 0 &&
        setInterval(() => {
          setTime(time - 1);
        }, 1000);
    }
  });

  const handleStart = () => {
    setStart(true);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;

    setTime(val);
  };

  return (
    <div>
      <h1>Countdown</h1>
      <div>
        <h1>Enter time:</h1>
        <input className="border-2" onChange={handleInputChange} />
        <h1>{time}</h1>
        <button className="border-2 p-2" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Countdown;
