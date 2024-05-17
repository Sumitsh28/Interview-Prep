import React, { useState } from "react";

const Modal = () => {
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(true);
  };

  const closeModal = () => {
    setActive(false);
  };
  return (
    <>
      {active && (
        <div className="w-screen h-screen flex flex-row justify-evenly">
          <p>Hello</p>
          <button
            className="border border-black z-10 p-2 h-10"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      )}
      {!active && (
        <div className="mt-10">
          <button className="border border-black z-10" onClick={openModal}>
            Open Modal
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
