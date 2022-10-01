// reducer, recibe accion que se despacho y estado
const { INCREMENTO, DECREMENTO } = require('../action-types');

// la primera vez el estado contador=0
const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

//el state es un objeto, quiero devolver un estado nuevo, no tento que pisar el viejo.
function contador(state = initialState, action) {
  switch(action.type){
    case INCREMENTO:
      return {
        contador: state.contador + 1,
      }
    case DECREMENTO:
      return {
        contador: state.contador - 1,
      }
    default:
      return state;
  }
}




module.exports = contador;