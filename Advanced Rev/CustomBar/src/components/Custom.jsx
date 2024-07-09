import React, { useState } from "react";

const Custom = () => {
  const [num, setNum] = useState(0);

  const handleInputChange = (e) => {
    if (e.target.value === null) {
      setNum(0);
    }
    console.log(e.target.value);
    setNum(e.target.value);
  };
  return (
    <div>
      <h1>Custom</h1>

      <div className="flex flex-col ">
        <div className="w-[200px] h-[20px] bg-gray-200  mt-40 ">
          <div
            className={`min-w-0 h-[20px] bg-gray-500 transition-all relative`}
            style={{ width: `${num}%` }}
          ></div>
        </div>

        <input className="border-2 mt-10" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Custom;
