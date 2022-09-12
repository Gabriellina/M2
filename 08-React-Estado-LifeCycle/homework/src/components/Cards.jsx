import React from 'react';
import Card from './Card'; //porque uso <Card>
import s from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
  return (
  
  <div className={s.divCards}>
    {
      cities.map(ciudad =>
        <Card 
        max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
         onClose={() => onClose(ciudad.id)} 
          id = {ciudad.id}
        />
      )
    }
  </div>
  );
} else {
  return(
    <div>Sin ciudades</div>
  )
}
}