import "./App.css";
import Menu from "./components/Menu";
import menus from "./components/data";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-96 gap-10">
        <Menu menus={menus} />
      </div>
    </>
  );
}

export default App;
