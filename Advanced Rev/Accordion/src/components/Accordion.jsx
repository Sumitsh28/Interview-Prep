import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({ title, para }) => {
  const [open, setOpen] = useState(false);
  const handleDown = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`${
        !open ? "h-20 rounded-full" : "h-full "
      } w-[600px] h-20 bg-black flex flex-col text-white `}
    >
      <div className="flex flex-row justify-start items-center mt-7 ml-8 text-white gap-[350px]">
        <h1>{title}</h1>
        {!open ? (
          <FaAngleDown onClick={handleDown} className="cursor-pointer" />
        ) : (
          <FaAngleUp onClick={handleDown} className="cursor-pointer" />
        )}
      </div>

      {open && <p className="mt-10 ml-8 mb-5">{para}</p>}
    </div>
  );
};

export default Accordion;
