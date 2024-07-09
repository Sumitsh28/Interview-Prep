import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    });
  });

  return (
    <div>
      <h1>Clock</h1>
      <div className="flex flex-row">
        <h1>{time.getHours().toString()}</h1>
        <span>:</span>
        <h1>{time.getMinutes().toString()}</h1>
        <span>:</span>
        <h1>{time.getSeconds().toString()}</h1>
      </div>
    </div>
  );
};

export default Clock;
