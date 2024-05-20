import React, { useState } from 'react';

const Counter = () => {
  const [max, setMax] = useState("");
  const [num, setNum] = useState("");

  const randomNum = () => {
    if (max === "") {
      setMax(Math.floor(Math.random() * 7));
    } else {
      setMax(Math.floor(Math.random() * 7));
      
    }
  }

  const secondRandom = () => {
    if (num === "") {
      setNum(Math.floor(Math.random() * 7));
    } else {
      setNum(Math.floor(Math.random() * 7));
    }
  }

  return (
    <div className="div2">
    
      <i className="fa-solid fa-dice-one"></i>
      <div className="div1" onClick={randomNum}>{max}</div>
      <div className="div3" onClick={secondRandom}>{num}</div>
    </div>
  );
}

export default Counter;
