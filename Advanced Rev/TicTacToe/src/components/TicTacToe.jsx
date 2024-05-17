import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [items, setItems] = useState(Array(9).fill(""));
  const [toggleX, setToggleX] = useState(true);
  const [winner, setWinner] = useState("");

  function Square({ value, onClick }) {
    return (
      <div
        className="w-36 h-36 border border-black flex items-center justify-center text-3xl text-red-600"
        onClick={onClick}
      >
        {value}
      </div>
    );
  }

  function handleClick(key) {
    if (items[key - 1] === "") {
      const newItems = [...items];
      newItems[key - 1] = toggleX ? "X" : "O";
      setItems(newItems);
      setToggleX(!toggleX);
    }
  }

  useEffect(() => {
    const check = checkWinner();
    if (check) {
      setWinner(check);
    }
  }, [items]);

  function checkWinner() {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (items[a] && items[a] === items[b] && items[a] === items[c]) {
        return items[a];
      }
    }

    return "";
  }

  const handleReset = () => {
    setItems(Array(9).fill(""));
    setWinner("");
  };

  return (
    <div className="flex flex-col mt-40 items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <Square value={items[0]} onClick={() => handleClick(1)} />
        <Square value={items[1]} onClick={() => handleClick(2)} />
        <Square value={items[2]} onClick={() => handleClick(3)} />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Square value={items[3]} onClick={() => handleClick(4)} />
        <Square value={items[4]} onClick={() => handleClick(5)} />
        <Square value={items[5]} onClick={() => handleClick(6)} />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Square value={items[6]} onClick={() => handleClick(7)} />
        <Square value={items[7]} onClick={() => handleClick(8)} />
        <Square value={items[8]} onClick={() => handleClick(9)} />
      </div>
      {winner && (
        <div className="flex flex-row gap-10 items-center justify-center mt-20">
          <h1 className="text-3xl ">{winner} WON</h1>
          <button className="rounded-full" onClick={handleReset}>
            🔁
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
