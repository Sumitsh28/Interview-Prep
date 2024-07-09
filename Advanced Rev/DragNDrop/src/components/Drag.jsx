import React, { useState, useEffect } from "react";

const Drag = () => {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      const res = await fetch("https://dummyjson.com/todos?limit=5");
      const data = await res.json();

      if (data && data.todos && data.todos.length > 0) {
        const updatedTodos = data.todos.map((item) => ({
          ...item,
          status: "wip",
        }));

        setTodos(updatedTodos);
        console.log(updatedTodos);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  function onDragStart(event, id) {
    event.dataTransfer.setData("id", id);
  }

  function onDrop(event, status) {
    event.preventDefault();
    const id = parseInt(event.dataTransfer.getData("id"));

    const updated = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status };
      }
      return item;
    });

    setTodos(updated);
  }

  function renderTodos(todos) {
    if (!todos || !Array.isArray(todos)) {
      console.error("Todos is not defined or not an array");
      return {
        wip: [],
        completed: [],
      };
    }

    const listToShow = {
      wip: [],
      completed: [],
    };

    todos.forEach((element) => {
      listToShow[element.status].push(
        <div
          onDragStart={(event) => onDragStart(event, element.id)}
          draggable
          key={element.id}
          className="w-full border-2 h-[100px] flex items-center justify-center p-2 bg-pink-300 gap-5"
        >
          {element.todo}
        </div>
      );
    });

    return listToShow;
  }

  const { wip, completed } = renderTodos(todos);

  return (
    <div>
      <h1>Drag</h1>

      <div className="flex">
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="flex flex-col items-center justify-center mt-10 w-1/2 border-2 p-2"
        >
          <h1 className="font-bold p-2">Work in progress</h1>
          {wip}
        </div>
        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="flex flex-col items-center justify-center mt-10 w-1/2 border-2 p-2"
        >
          <h1 className="font-bold p-2">Completed</h1>
          {completed}
        </div>
      </div>
    </div>
  );
};

export default Drag;
