import React from 'react';

export default function Card(props) {//props, objeto con max, min, name, 
  // acá va tu código

  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h4>{props.name}</h4>
    <p>min</p>
    <p>{props.min}</p>
    <p>max</p>
    <p>{props.max}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" />
    
  </div>)
};