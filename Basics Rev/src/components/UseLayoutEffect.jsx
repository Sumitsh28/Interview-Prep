import React, { useEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const divRef = useRef();

  useEffect(() => {
    const getDivRef = divRef.current;

    getDivRef.style.opacity = 0;

    setTimeout(() => {
      getDivRef.style.opacity = 1;
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <div className="text-3xl">Use Layout Effect</div>
      <div ref={divRef} className="text-2xl">
        TEXT
      </div>
    </div>
  );
};

export default UseLayoutEffect;
