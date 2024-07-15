import React, { useState } from "react";

const CounterApp =()=> {
  const [count, setCount] = useState(0);
  const handleIncrement=()=>{
    setCount(count+1)
  }

  const handleDecrement=()=>{
    if(count>0)
    {
      setCount(count-1)
    }
  }
  return (
    <>
    <div>
      COUNT: {count}
      <br/>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
    </>
  )
}
export default CounterApp;