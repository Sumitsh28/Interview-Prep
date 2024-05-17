import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
