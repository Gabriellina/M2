import React from "react";
import SearchBar from "./SearchBar";
import s from './Nav.module.css';

export default function Nav({onSearch}){
  return(

<div className={s.navBar}>
  <div>
    <img src={require('../logoHenry.png').default} alt="img not found" />
    <span className={s.spanNavBar}>Henry weather app</span>
  </div>
  <SearchBar onSearch={onSearch}/> {/* pasamano, aqui le pasamos la f(x) que recibimos de App a SearchBar */}
</div>
)
}
