import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
     //applyMiddleware acciones asincronicas// compose para muchos argumentos, a veces el createStore no soporta mas de dos argumentos
);

export default store;




// import thunk from "redux-thunk";


