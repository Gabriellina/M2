import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite, getMovieDetail } from '../../actions'; //al ser index.js, no necesito especificarlo

export class FavouriteList extends Component {


  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map(peli => //comprueba si hay algo
            <div key={peli.id}>
              <Link to={`/movie/${peli.id}`}>
                <li>{peli.title}</li>
              </Link>
              <br></br>
              <button onClick={()=> this.props.removeMovieFavorite(peli.id)}>X</button>

            </div>
          )}
          
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    movies: state.moviesFavourites
  }
}

export default connect(mapStateToProps,{removeMovieFavorite})(FavouriteList)
