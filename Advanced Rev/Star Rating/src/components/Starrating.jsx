import React, { useState } from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const Starrating = ({ number }) => {
  const [idx, setIdx] = useState(null);
  const [hover, setHover] = useState(false);

  function handleClick(i){
    setHover(true)
  };

  function handleMouseEnter(i){
    setHover(true);
  };

  function handleMouseLeave(i){
    setRating(i);
  };

  const stars = Array.from({ length: 10 }, (_, index) => {

    index = index + 1
    <IoStarSharp
      className={`text-gray-500`}
      key={index}
      onClick={() => handleClick(index)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    />
  )};

  return <div className="flex flex-row text-3xl">{stars}</div>;
};

export default Starrating;
