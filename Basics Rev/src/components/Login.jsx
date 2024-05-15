import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-black"
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-black"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
