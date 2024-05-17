import React, { useState } from "react";

const Tabs = () => {
  const [tab, setTab] = useState(0);
  function setActiveTab(index) {
    setTab(index);
    console.log(tab);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      Tabs
      <div className="flex flex-row mt-10 gap-5">
        <div className="flex flex-col gap-20">
          <div
            className="w-30 bg-gray-200 p-10"
            onClick={() => setActiveTab(1)}
          >
            Tab-1
          </div>
          {tab === 1 && <div>Content of tab 1</div>}
        </div>
        <div className="flex flex-col gap-20">
          <div
            className="w-30 bg-gray-200 p-10"
            onClick={() => setActiveTab(2)}
          >
            Tab-2
          </div>
          {tab === 2 && <div>Content of tab 2</div>}
        </div>
        <div className="flex flex-col gap-20">
          <div
            className="w-30 bg-gray-200 p-10"
            onClick={() => setActiveTab(3)}
          >
            Tab-3
          </div>
          {tab === 3 && <div>Content of tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
