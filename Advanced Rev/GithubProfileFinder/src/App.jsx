import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState("");

  const handleInput = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 mt-40">
        <input className="border border-black" onChange={handleInput} />
        <Profile user={user} />
      </div>
    </>
  );
}

export default App;
