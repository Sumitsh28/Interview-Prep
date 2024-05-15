import React, { useContext } from "react";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

function Dash() {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dash;
