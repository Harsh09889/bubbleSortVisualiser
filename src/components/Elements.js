import React, { useMemo, useEffect } from "react";
import "./Elements.css";

const Elements = (props) => {
  // let sortedEl = [];
  const sortedEl = useMemo(() => {
    return [];
  }, []);

  console.log(props.length)

  useEffect(() => {
    
    sortedEl.push(props.sorted)
    
  }, [props.sorted,sortedEl])
  
  let doneSorted=''
  if(sortedEl.includes(props.i)){
    doneSorted = 'sorted'
  }

  let activeness = '';
  if(sortedEl.length-1 !== props.length && (props.active[0] === props.i || props.active[1] === props.i )){
    activeness = 'active'
  }

  return (
    <>
      <div 
      style={props.el >= 0 ? {left:`${props.i * 10}%`, height:`${(props.el/props.sum)*100}%`} : {left:`${props.i * 10}%`, height:`${(Math.abs(props.el)/props.sum)*100}%`, background:'purple'}} 
      
      className={`elementContainer bar ${activeness} ${doneSorted}`}>
        <h3>{props.el}</h3>
      </div>
    </>
  );

};
export default Elements;
