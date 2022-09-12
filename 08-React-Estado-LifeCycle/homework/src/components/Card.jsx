import React from 'react';
import s from  './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
  <div className={s.alineacionCard}>
  <div className={s.divCard}>
    <button onClick={props.onClose} className={s.btn}>X</button>
    <h4>{props.name}</h4>
    <div className={s.infoCard}>

      <div>
        <p>min</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>max</p>
        <p>{props.max}</p>
      </div>
      
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" />
     
    </div>
  </div>
  </div>
  )
};