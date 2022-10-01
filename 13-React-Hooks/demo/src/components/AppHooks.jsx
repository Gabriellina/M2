import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName } from '../actions';

export default function AppHooks() {
  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)// ancho de la pantalla!!!!

  const dispatch = useDispatch()
  const nameRedux = useSelector(state => state.name)
  
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth) //una fx que modifica el estado width con el ancho de mi pantalla
    window.addEventListener('resize', handleResize)//un eventLitener que escucha cuando se cambia el ancho de la pantalla y ejecuta la fx que defini arriba que modifica el estado 'width'


    //fx que retorna: se ejecuta cuando se desmonta el componente    
    return () => {
      console.log('Entra al willUnmount...');
      window.removeEventListener('resize', handleResize)
    }
  }, [])   //didMount


  function handleChange(e) {
    setName(e.target.value)
  }

useEffect(() => {
    document.title = name
  },[name])
 

  //--------------------------------------------------------------------------------
   useEffect(() =>{
    console.log('Entro al useEffect')
  }) // didMount && didUpdate (este cb se ejecuta cuando el componente se monte o cambie alguna prop o algun estado)
  //-----------------------------------------------------------

  useEffect(()=>{
    console.log('Entr[o al useEffect que escucha al width')
  },[width,name])  //didMount && didUpdate selectivo
  //recibe 2 argumentos: 
  //1) fx de cb
  //2) arreglo de dependencia: le paso las props o los estados que puntualmente me interesa a mi que este escuchando su cambio
  //-------------------------------------------------------------
  
  useEffect(() => {
    console.log('Entro al useEffect sin dependencia')
  },[]) //didMount
  //arreglo de dependencia vacio! Solo se ejecuta cuando se monta! didMount
 
  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      {/* <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div> */}
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }
