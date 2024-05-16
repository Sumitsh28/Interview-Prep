import React, { useState } from "react";
import MenuList from "./Menu-List";

const MenuItem = ({ item }) => {
  const [active, setActive] = useState(false);
  const handleExpand = () => {
    setActive(!active);
  };
  return (
    <li className="flex flex-col gap-2 items-center">
      <div className="flex flex-row gap-5">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={handleExpand}>+</span>
        ) : null}
      </div>
      {active && item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
      {}
    </li>
  );
};

export default MenuItem;
