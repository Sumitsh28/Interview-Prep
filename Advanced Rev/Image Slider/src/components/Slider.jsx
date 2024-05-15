import React, { useEffect, useState } from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import { GoDotFill } from 'react-icons/go';

const Slider = ({src,limit,page}) => {

  const[idx, setIdx] = useState(0);
  const[images, setImages] = useState([]);
  const[errorMess, setErrorMess] = useState();
  const[isLoading, setIsLoading] = useState(true);
  const[active, setActive] = useState(false);

  
  async function getImgs(getUrl){

    setIsLoading(true);

    try{
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data){
        setImages(data);
        setIsLoading(false);
      }
    }

    catch(err){
      setErrorMess(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    
    if(src !== ""){
      getImgs(src);
  
    }
  }, [src]);

  console.log(images)
  
 
  const dots = Array.from({ length: 10 }, (_, index) => <GoDotFill className={`${idx === index ? "text-blue-400" : "text-black"}`} key={index}/>);


  const handleLeft = () => {

    if(idx > 0){

      const newIdx = idx - 1;
      setIdx(newIdx);
    }

    if(idx <= 0){
      const newIdx = limit - 1;
      setIdx(newIdx);
    }

  }

  const handleRight = () => {

    if(idx < limit){

      const newIdx = idx + 1;
      setIdx(newIdx);
    }

    if(idx >= limit){
      const newIdx = limit - idx;
      setIdx(newIdx);
    }

  }

  if(isLoading){
    return <p>Loading Data. Please wait!!!</p>
  }

  if(errorMess){
    return <p>Error occured. Please reload!!!</p>
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-center items-center'>
        <CgChevronLeft className='cursor-pointer mr-5 text-3xl' onClick={handleLeft}/>
        <img src={images[idx].download_url} className='h-[200px]'/>
        <CgChevronRight className='cursor-pointer ml-5 text-3xl' onClick={handleRight}/>
      </div>
      <div className='flex flex-row cursor-pointer justify-center items-center mt-5 text-xl'>
     {dots}
      </div>
    </div>
  )
}

export default Slider