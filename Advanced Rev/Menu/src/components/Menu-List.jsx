import React from "react";
import MenuItem from "./Menu-Item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="mt-0 mb-0 list-none flex flex-col gap-8">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

export default MenuList;
