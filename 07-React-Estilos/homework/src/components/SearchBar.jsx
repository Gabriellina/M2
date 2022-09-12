import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.contInput}>
  <div className={s.divInput}>
    <input className={s.inputStyle} type={'text'} placeholder = 'city...' />
    <button className={s.btnSearch} onClick={()=>props.onSearch("Buscando...")}>Agregar</button> {/* a un click siempre se le pasa la definicion de una funcion, no su ejecucion. Como quiero que al hacer click no me aparezca object Object(si no le pongo ningun parametro, el unico que muestra es el evento, y lo muestra asi, "object Object"), la pongo dentro de una arrow function, y al hacer click me aparecera "Buscando..."" */}
    
  </div>
  </div>
  )
};