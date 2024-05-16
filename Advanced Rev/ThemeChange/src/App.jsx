import "./App.css";
import Starrating from "./components/Starrating";
import ThemeChange from "./components/ThemeChange";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-96 gap-10">
        <ThemeChange />
      </div>
    </>
  );
}

export default App;
