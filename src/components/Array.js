import React, { useState } from "react";
import Elements from "./Elements";
import "./Array.css";

const Array = () => {
  const arra = [1,2,3,40,14,3,7,5,1,9,12,17,19]
  const [active, setActive] = useState([-1,-1]);
  const [array, setArray] = useState(arra);
  const [toSort,setToSort] = useState(true);
  const [sorted, setSorted] = useState(-1)

  const swap = (arr, a, b) => {
    let tem = arr[a];
    arr[a] = arr[b];
    arr[b] = tem;
  };

  const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

  const bubbleSort = async (a) => {
    setToSort(false)
    let passed = JSON.parse(JSON.stringify(a));
    for (let i = 0; i < passed.length-1; i++) {
      for (let j = 0; j < passed.length - i - 1; j++) {
        
        await wait(1000);
        setTimeout(() => {
          console.log(toSort);
          if(!toSort) return;
          setActive([j,j+1])
          setArray((array) => {
            const newArray = [...array];
            if(newArray[j] > newArray[j+1]) swap(newArray, j, j + 1); 
            return newArray;
          });
        });

      }
      setSorted(array.length-1-i)
    }
  };

  const runBubbleSort = async (a) => {
    bubbleSort(a);
  }

  const sum = array.reduce((a, b) => (Math.abs(a)) + (Math.abs(b)), 0);

  const elements = array.map((el, i) => (
    <Elements 
    key={i} 
    el={el} 
    i={i} 
    active={active} 
    sorted = {sorted} 
    length = {array.length}
    sum = {sum}
    />
  ));

  // console.log("array rendered")
  return (
    <div className="array" style={{ display: "flex",alignItems:'center',height:'80vh', maxWidth:'100vw', justifyContent:'center'}}>
      <div style={{display: "flex", height:'100%',alignItems:'flex-end' }}>{elements}</div>
      <button className={toSort ? `sortButton` :`sortButton hidden` } onClick={() => runBubbleSort(array)}>
        Click to sort
      </button>
    </div>
  );
};

export default Array;
