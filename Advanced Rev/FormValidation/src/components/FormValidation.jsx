import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [allError, setAllError] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUsername(e.target.value);

    if (username.length < 6) {
      setAllError((prevError) => ({
        ...prevError,
        username: "Please enter username greater than 6",
      }));
    } else {
      setAllError.username("");
    }
  };

  return (
    <div>
      <h1>FormValidation</h1>
      <div className="flex flex-col gap-2 mt-10">
        <label>Enter Username:</label>
        <input className="border-2" onChange={handleChange} />
        {username && allError.username && <h1>{allError.username}</h1>}
        <label>Enter Email:</label>
        <input className="border-2" />
        <label>Enter Password:</label>
        <input className="border-2" />
      </div>
    </div>
  );
};

export default FormValidation;
