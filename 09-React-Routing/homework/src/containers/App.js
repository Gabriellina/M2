import React, { useState } from 'react';
 import { Switch, Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';


//const apiKey = 'Aqui va la API key que creaste';

function App() {
  const [cities, setCities] = useState([]);
 
  function onSearch(ciudad) {
    //Llamado a la API del clima
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
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  return (
    
    <div className="App">
      <Route path='/'>
        <Nav onSearch={onSearch}/>{/* muestra siempre el componente Nav, por eso lo hago afuera del switch, una forma de forzar que siempre muestre el Nav */}
      </Route>
      <Switch>
      <Route exact path='/ciudad/:ciudadId'
          
          render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
        />
        <Route exact path='/'>
          <div>
              <Cards
              cities={cities}
              onClose={onClose}
              />
          </div>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        
     </Switch>
    </div>
    
  );
}

export default App;
