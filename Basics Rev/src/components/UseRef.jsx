import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const countRef = useRef(0);
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const getDivRef = divRef.current;

    console.log(getDivRef);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCount = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <div className="text-3xl">UseRef</div>
      <div ref={divRef} className="text-2xl">
        Count: {countRef.current}
      </div>
      <button className="bg-black text-white" onClick={handleCount}>
        Click Me
      </button>

      <input
        placeholder="Enter something"
        ref={inputRef}
        className="border border-black"
      />
    </div>
  );
};

export default UseRef;
