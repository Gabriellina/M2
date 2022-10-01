import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions'; //al ser index.js, no necesito especificarlo



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {//cambia la propiedad del estado, debe estar en un input, capturo el valor del input dentro del estado.
    this.setState({ title: event.target.value });//cambia la propiedad title de mi estado
  }
  handleSubmit(event) {// aqui despacha, dispatch!!!
    event.preventDefault();
    this.props.getMovies(this.state.title)//despacha la acion getMovies con el estado .title
  }


  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input //el input que ejecuta el evento onChange que dispara handleChange
              type="text"
              id="title"
              autoComplete="off"
              value={title} /* bindeado al estado */
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies?.map(peli =>/* si hay this.props.movies */
            <div key={peli.imdbID}>
              <li>
              <Link to={`/movie/${peli.imdbID}`}>{/* esto esta en el README */}
                {peli.Title}
              </Link>
              {/* agrego boton para agregar a favoritas, aqui hay que fijarse en el reducer como figura la accion de agregar, cuales parametros tiene el objeto accion? */}
              <br></br>
              <button onClick={()=> this.props.addMovieFavorite({title: peli.Title, id: peli.imdbID})}>Agregar a Favoritas</button>
              </li>
            </div>)}
        </ul>
      </div>
    );
  }
}

//export default Buscador;
function mapStateToProps(state) { //toma el estado de redux
  return {
    movies: state.moviesLoaded /*
    guarda en mi componente una propiedad movies
    ============================================== 
    que va a ser igual la partecita del estado de las peliculas por titulo, luego se utiliza como ***this.props.movies*** 
                      ============*/
  };
}

function mapDispatchToProps(dispatch) { //capacidad de despachar acciones 
  //desde las  *props* de nuestro componente  (ej: this.props.addMovieFavorite)
//             =======
  return { //estas acciones hay que importarlas
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),//dispatch de la accion addMovieFavorite(objeto con type..y payload, devuelve una accion, despacho una accion)
    getMovies: title => dispatch(getMovies(title))//props.getMovies(parametro)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
