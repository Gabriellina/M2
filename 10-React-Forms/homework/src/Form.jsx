import React from 'react';
 

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password){
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid';
  }


  return errors;
};

export default function  Form() {
 /*  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('') */
  //Genial! ahora tenemos estado, pero tenemos que conectarlo con el formulario. Para eso vamos a poner como value del input el estado correspondiente.

  //vamos a unificar el estado en un sólo objeto, donde cada input se refleje en una propiedad:
  const [input, setInput] = React.useState({
    username: '',
    password:'',
  })
//podemos usar su atributo name para indicar el nombre de la propiedad en el estado.

const[errors, setErrors] = React.useState({
  username:'',
  password:'',
});


// Recuerden que setInput pista el estado anterior. Por lo tanto tenemos que pasarle también las propiedades viejas que tenia el estado, podemos usar el spreading de ES6:
  const handleInputChange = function(e){
    setInput({...input,[e.target.name]:e.target.value});
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
 


  return (
    <form >
    <div>
      <label>Username:</label>
      <input className={errors.username?'danger':''} /* aqui use ternario */
      type="text" name="username" 
      onChange = {handleInputChange}
      value={input.name} />
      {errors.username && (
        <p className='danger'>{errors.username}</p>
      )}
    </div>
    <div>
      <label>Password:</label>
      <input className={errors.password && 'danger'}
      type="password" name="password"
      onChange={handleInputChange}
      value={input.name}  />
      {/* render condicional */}
      {errors.password &&(
        <p className='danger'>{errors.password}</p> 
      )}      
    </div>
    <div>
      <input id='boton' type="submit" value="Submit" />
    </div>
    
  </form>
  )
}


