import React, { useEffect, useState } from "react";

const Indicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scroll, setScroll] = useState();

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  function handleScrollPercent() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll((scrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scroll);

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <div className="fixed top-0 flex flex-col items-center justify-center">
        <p className="text-3xl bg-slate-500 w-screen">Custom Indicator </p>
        <div className="relative bg-purple-200 w-screen h-5">
          <div
            className={`bg-purple-950 h-full absolute left-0 top-0`}
            style={{ width: `${scroll}%` }}
          ></div>
        </div>
      </div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {data.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default Indicator;
