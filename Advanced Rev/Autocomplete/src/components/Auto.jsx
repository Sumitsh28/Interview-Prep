import React, { useEffect, useState } from "react";

const Auto = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.length > 0) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setFiltered(
      data.filter((item) => item.title.toLowerCase().includes(inputValue))
    );
  };

  return (
    <div className="flex flex-col gap-2 mt-10">
      <p className="text-3xl">Filter from API</p>
      <div className="flex flex-col gap-2">
        <input className="border border-black" onChange={handleInput} />
        {filtered.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Auto;
