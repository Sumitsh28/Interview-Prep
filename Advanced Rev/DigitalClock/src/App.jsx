import "./App.css";
import Category from "./components/Category";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";
import StepCount from "./components/StepCount";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        {/* <Clock /> */}
        {/* <Countdown /> */}
        {/* <StepCount /> */}
        <Category />
      </div>
    </>
  );
}

export default App;
