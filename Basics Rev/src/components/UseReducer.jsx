import { useReducer } from "react";

const initialState = {
  count: 0,
  showCount: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "show":
      return {
        ...state,
        showCount: !state.showCount,
      };

    default:
      return state;
  }
}

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <h1 className="text-3xl">Use Reducer</h1>

      {state.showCount && <h1 className="text-2xl">Count: {state.count}</h1>}

      <div className="flex flex-row gap-5">
        <button
          className="bg-black text-white"
          onClick={() => dispatch({ type: "add" })}
        >
          Increase
        </button>
        <button
          className="bg-black text-white"
          onClick={() => dispatch({ type: "sub" })}
        >
          Decrese
        </button>
        <button
          className="bg-black text-white"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
        <button
          className="bg-black text-white"
          onClick={() => dispatch({ type: "show" })}
        >
          Show
        </button>
      </div>
    </div>
  );
};
