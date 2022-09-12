import React from 'react';
import s from  './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    
  <div className={`${s.divCard}`}>
    
    <table className={`${s.tabla}`}>
  <tr>
  
  <th colSpan={'8'}></th>
  <th><button>X</button></th>
  </tr>

  <tr>
    
    <td colSpan={'9'}><h3>{props.name}</h3></td>
    
  </tr>
  <tr>
    <td colSpan={'3'}>Min</td>
    <td colSpan={'3'}>Max</td>
    <td colspan= {'3'} rowSpan={'2'}><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" /></td>
  </tr>
  <tr>
    <td colSpan={'3'}>{props.min}</td>
    <td colSpan={'3'}>{props.max}</td>

  </tr>
  </table>
  </div>
  )
}