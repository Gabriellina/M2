const miApiKey = '27221900'

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
export function removeMovieFavorite(id) {
    return { type:"REMOVE_MOVIE_FAVORITE", payload:id};    
}

export function getMovieDetail(idMovie){
  return function(dispatch){
    fetch(`http://www.omdbapi.com/?apikey=${miApiKey}&i=${idMovie}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: data});
      });
  }
}
  
  
  //si no funciona: const apikey = '1bc6c554';
  
  export function getMovies(titulo) {
    return function(dispatch) { //las operaciones asincronicas, en vez de retornar una accion, retorna una funcion
      return fetch(`http://www.omdbapi.com/?apikey=${miApiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });//aqui despacha la accion
        });
    };
  }
  