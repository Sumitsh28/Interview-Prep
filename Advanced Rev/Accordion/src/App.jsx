import "./App.css";
import Accordion from "./components/Accordion";

const data = {
  first: { title: "Where is your college?", para: "My college is in Varanasi" },

  second: { title: "Where is your home?", para: "My Home is in Delhi" },
};

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-96 gap-10">
        <Accordion title={data.first.title} para={data.first.para} />

        <Accordion title={data.second.title} para={data.second.para} />
      </div>
    </>
  );
}

export default App;
