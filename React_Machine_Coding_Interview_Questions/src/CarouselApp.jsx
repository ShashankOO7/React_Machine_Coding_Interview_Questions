import React, { useState } from "react";

const items = [
  {
    id:1,
    imageURL: "https://cdn-products.eneba.com/resized-products/b574YXDkA3oItV5qk5Tmjqti8yRLdNTPu0fz0A7mA_8_350x200_2x-0.jpeg",
    title: "Devil May Cry 5",
  },
  {
    id:2,
    imageURL: "https://1.bp.blogspot.com/-muVhW2i9yDs/UR9vd6vwJnI/AAAAAAAAAVg/zCZbMPdzpKE/s1600/DmC+4.jpg",
    title: "Devil May Cry 4",
  },
  {
    id:3,
    imageURL: "https://m.media-amazon.com/images/M/MV5BYmVkM2Y4YTUtNzVjMC00ZjBlLTgxOGYtOTljY2M0ZWEzMjlhXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_.jpg",
    title: "DMC: Devil May Cry",
  }
]

const CarouselApp =()=> {

  const [activeItem, setActiveItem] = useState(0);

  const handleNext=()=>{
    if(activeItem === items.length-1)
    {
      setActiveItem(0)
    }
    setActiveItem((activeItem)=>activeItem+1)
  }
  const handlePrev=()=>{
    if(activeItem === 0)
    {
      setActiveItem(items.length-1)
    }
    setActiveItem((activeItem)=>activeItem-1)
  }

  return (
    <>
    <div>
      <img src={items[activeItem].imageURL} width={200} height={300}/>
      <h4>{items[activeItem].title}</h4>
    </div>
    <br/>
    <button onClick={handlePrev}>Prev</button>
    <button onClick={handleNext}>Next</button>
    </>
  )
}
export default CarouselApp;