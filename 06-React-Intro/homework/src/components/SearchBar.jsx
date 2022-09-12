import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    <input type={'text'} placeholder = 'city...' />
    <button onClick={()=>props.onSearch("Buscando...")}>Add</button> {/* a un click siempre se le pasa la definicion de una funcion, no su ejecucion. Como quiero que al hacer click no me aparezca object Object(si no le pongo ningun parametro, el unico que muestra es el evento, y lo muestra asi, "object Object"), la pongo dentro de una arrow function, y al hacer click me aparecera "Buscando..."" */}
    
  </div>)
};