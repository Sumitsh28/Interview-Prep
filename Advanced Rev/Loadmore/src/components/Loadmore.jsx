import React, { useEffect, useState } from 'react'

export const Loadmore = () => {

  const[loading,setLoading] = useState();
  const[product,setProduct] = useState([]);
  const[count,setCount] = useState(0);

  async function getProducts(){

    try{
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count}&select=title,price`);

        const data = await response.json();

        console.log(data);

        if(data && data.products && data.products.length > 0){
          setProduct(prevProduct => [...prevProduct, ...data.products]);
        }
        
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {

    getProducts();
  },[count])

  const handleClick = () => {

    setCount(count+10);
  }

  

  return (
    <div className='flex flex-col'>
      <div>{product && product.length > 0 ? (
        product.map((item) => (
          <div key={item.id+count}>
            <h1>{item.title}</h1>
          </div>
        ))
      ) : (null)}</div>
      <button className={`${count === 90 ? "bg-white" : "cursor-not-allowed"} p-2 border border-black`} onClick={handleClick}>Load More</button>

    </div>
  )
}
