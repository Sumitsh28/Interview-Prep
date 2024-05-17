import "./App.css";
import Auto from "./components/Auto";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <Auto url={"https://dummyjson.com/products?limit=100"} />
      </div>
    </>
  );
}

export default App;
