import React, { Component } from "react";
import { connect } from 'react-redux';//
import { increment, decrement } from '../actions';

class Counter extends Component {
    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <div>
            <p>
                Clickeado: {this.props.count} veces
                <button onClick={this.props.increment}>
                    + {/* Incremeta */}
                </button>
                <button onClick={this.props.decrement}>
                    -  {/* Decrementa */}
                </button>
                 {/* Si quieres hacer los extra credit puede descomentar las lineas de abajo */}
                {/* <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa despues de un segundos
                </button>  */}
            </p>
            </div>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.

export default connect(mapStateToProps, { increment, decrement })(Counter);

//exporta el componente conectado a Redux, increment y decrement las puedo acceder desde las props de mis componentes, aunque no se las este pasando, estoy accediendo a mi action creator. Si las ejecuto voy a estar despachando una accion
//2 parametros que tengo ahora en mis props
/* rere
mapStateToProps: que partecita del estado de Redux quiero que me traiga a las props del componente
{}objeto con actions creator que quiero traer a mi componente

const mapStateToProps = (state) =>{ 
=======================
    Por defecto toma el ESTADO de Redux y retorna un objeto con un key y un value 

    return{
    -----------------------
    | count: state.count   |
    ------------------------
    }
}

lado izq de los ":"
===========================
como se va a llamar la prop en mi componente, this.prop.count. Yo no le estoy pasando count cuando lo llamo al Counter, pero gracias a esto voy a tener una prop que se llama count en su componente.

lado derecho de los ":"
=========================
del estado del Redux traeme su propiedad count, cuando haga this.prop.count voy a estar accediendo al estado de Redux, a su partecita que se llama count.

mapStateToProps: pasa a las props de mi componente la partecita del estado de Redux que me interesa y las actions creator que me interesa despachar de ese componente

si quiero acceder a mi estado de Redux digo: this.props.count
si quiero despachar una accion: this.props.increment(), la ejecuto y la despacho (o decrement)*/
