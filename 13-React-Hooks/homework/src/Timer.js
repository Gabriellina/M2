
import React, { useState , useEffect, useRef  } from 'react';
import './Timer.css'

const Timer = () => {
  
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(false);
    const [tipo, setTipo] = useState('Contador');

    const myRef = useRef(null);
    function agregaSegundos() {
      // `current` apunta al elemento de entrada de texto montado
      let ref = myRef.current.value
      setSegundos(ref)
  }

    useEffect(() => {
      let intervalo = null;
      if (activo && tipo === 'Contador') {
        intervalo = setInterval(() => {
          setSegundos(segundos => segundos + 1);
        }, 1000);
      }
      if(tipo==='Cuenta Regresiva' && activo) {
        
        intervalo = setInterval(() => {
          setSegundos(segundos => segundos - 1)
        }, 1000)
        
      }

      if (!activo && segundos !== 0 && tipo === 'Contador') {
        clearInterval(intervalo);
      }
      return () => clearInterval(intervalo);//unMount
    }, [activo, segundos, tipo]); //didMount. didUpdate Selectivo y unMount*la fx que retorna, return

     

    function toggle() {
      setActivo(!activo);
    }

    function reset() {
      setSegundos(0);
      setActivo(false);
    }

    function cambioTipo() {
      if(tipo === 'Contador') setTipo('Cuenta Regresiva')
      if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>{/**varias clases
       * button
       * button-primary
       * y la ultima es condicional (button-primary-${activo? 'active': 'inactive})
       * --------------------------
       * button-primary-active ->si el estado es activo, button-primary-inactive si el estado no esta activo
       */}
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' &&        
      <input type="number"  ref={myRef} placeholder="Ingresa Segundos"    autoComplete="off" onChange={agregaSegundos}/>}
    </div>
  );
};

export default Timer;