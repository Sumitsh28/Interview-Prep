import React, { useEffect, useState } from "react";

const Category = () => {
  const [item, setItem] = useState([]);
  const [categorys, setCategory] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();

    setItem(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Category</h1>
      <div className="flex flex-col">
        <div className="flex flex-row gap-10">
          <button className="border-2 p-2" onClick={() => setCategory("all")}>
            All
          </button>
          <button
            className="border-2 p-2"
            onClick={() => setCategory("smartphone")}
          >
            Smartphone
          </button>
          <button
            className="border-2 p-2"
            onClick={() => setCategory("beauty")}
          >
            Beauty
          </button>
          <button className="border-2 p-2" onClick={() => setCategory("food")}>
            Food
          </button>
        </div>
        <div className="mt-10">
          {item.map((i) =>
            i.category === categorys ? <h1>{i.title}</h1> : <h1>{i.title}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
