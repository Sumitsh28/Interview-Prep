import React, { useEffect, useState } from "react";

const UseMemo = () => {
  const [productList, setProductList] = useState([]);

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
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <div className="text-3xl">UseMemo</div>
      <ul>
        {productList && productList.length > 0
          ? productList.map((item, key) => <li key={key}>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default UseMemo;
