//Utilizar el archivo App.js para mantener actualizado el listado de ciudades a mostrar. Para ello debemos crearle un estado a este componente donde tengamos el array de ciudades:{useState}
import React, {useState} from 'react';
import './App.css';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


 function App() {
  const [cities, setCities] = useState([]);//creamos el estado con el hoock, el valor inicial es un array vacio
  function onSearch(ciudad) {
    //Acá el llamado a la API para obtener los datos de la ciudad
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${"55eb8a9161bac3791d7eed612317ac0b"}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !==id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/> {/* le paso la f(x) a Nav, como prop */}
      <Cards cities = {cities} onClose={onClose}/>
   
    </div>
      );
  }
  export default App