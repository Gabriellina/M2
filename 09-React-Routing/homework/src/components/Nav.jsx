import React from "react";
import {Link} from 'react-router-dom';
import SearchBar from "./SearchBar";
import s from './Nav.module.css';
//import About from './About.jsx';


export default function Nav({onSearch}){
  return(

<div className={s.navBar}>
  
  <div>
    <Link to='/'>
      <img src={require('../img/logoHenry.png').default} alt="img not found" />
      <span className={s.spanNavBar}>Henry weather app</span>
    </Link>
    <Link to='/about'>
      <span>About</span>
    </Link>
  </div>
  <SearchBar onSearch={onSearch}/> {/* pasamano, aqui le pasamos la f(x) que recibimos de App a SearchBar */}
</div>
)
}
