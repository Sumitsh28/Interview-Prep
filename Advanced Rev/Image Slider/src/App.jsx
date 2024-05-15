import "./App.css";
import Slider from "./components/Slider";



function App() {

  const sourceLink = "https://picsum.photos/v2/list"
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-96 gap-10">
        <Slider src={sourceLink} limit={10} page={1}/>
      </div>
    </>
  );
}

export default App;
