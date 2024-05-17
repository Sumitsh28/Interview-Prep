import "./App.css";
import Indicator from "./components/Indicator";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <Indicator url={"https://dummyjson.com/products?limit=100"} />
      </div>
    </>
  );
}

export default App;
