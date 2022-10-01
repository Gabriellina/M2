const initialState = {
    moviesFavourites: [],//va a ser un array con objetos
    moviesLoaded: [],
    movieDetail:{} //una sola
};

function rootReducer(state = initialState, action){
    if(action.type === "ADD_MOVIE_FAVORITE"){
        return {
            ...state, //copia de estado anterior
            moviesFavourites: state.moviesFavourites.concat(action.payload)
            //moviesFavorurites: [...state.moviesFavourites, action.payload]
        };
    }
    if (action.type === "GET_MOVIES") {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };
    }
    if(action.type === "REMOVE_MOVIE_FAVORITE"){
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(peli => peli.id !== action.payload)
        }
    }
    if(action.type ==="GET_MOVIE_DETAIL"){
        return {
            ...state,
            movieDetail: action.payload

        }
    }
    return state;
}

export default rootReducer;

