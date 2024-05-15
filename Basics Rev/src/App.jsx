import { useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dash from "./components/Dash";
import { UseReducer } from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemo from "./components/UseMemo";

function App() {
  const [word, setWord] = useState("Hello World");
  const [carWord, setCarWord] = useState("");
  const [carSelect, setCarSelect] = useState("");
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (count % 5 === 0) {
      setShowText(!showText);
    }
  }, [count]);

  async function getAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) {
        setProductList(result.products);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (count === 10) {
      getAllProducts();
    }

    if (count === 11) {
      setProductList([]);
    }
  }, [count]);

  const toggleWord = () => {
    setWord("Button Clicked!!");
  };

  const handleInputChange = (e) => {
    const entered = e.target.value;
    setCarWord(entered);
  };

  const handleSelect = (e) => {
    const selected = e.target.value;
    setCarSelect(selected);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div>
        <h1 className="text-3xl">{word}</h1>
        <button onClick={toggleWord} className="border">
          Click Me!!
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <input
            className="border-2 border-black"
            onChange={handleInputChange}
          />

          <select
            name="cars"
            id="cars"
            className="border-2 border-black"
            onChange={handleSelect}
          >
            <option value="selectcar">Select Car</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-row gap-3">
          <p className="text-xl">{carWord}</p>
          {carSelect !== "selectcar" && <p className="text-xl">{carSelect}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {showText && <p className="text-xl">Text from useEffect.</p>}
        <p className="text-xl">Current Count: {count}</p>
        <button
          className="border-2 border-black"
          onClick={() => setCount(count + 1)}
        >
          ++
        </button>

        <ul>
          {productList && productList.length > 0
            ? productList.map((item, key) => <li key={key}>{item.title}</li>)
            : null}
        </ul>
      </div>

      <div className="flex flex-col">
        <Login />
        <Profile />
      </div>

      <div className="flex flex-col">
        <Dash />
      </div>

      <UseReducer />
      <UseRef />
      <UseLayoutEffect />
      <UseMemo />
    </div>
  );
}

export default App;
