import React from "react";
import MenuList from "./Menu-List";

const Menu = ({ menus = [] }) => {
  return (
    <div className="w-[350px]">
      <MenuList list={menus} />
    </div>
  );
};

export default Menu;
