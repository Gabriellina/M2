
// var btnVerAmigos = document.getElementById('boton');
// var listaAmigos = document.getElementById('lista');
// var amigos = [];
// //-----------------------get ---------------------------------------
// btnVerAmigos.addEventListener('click',function(){
//     // GET AJAX
//     $.get("http://localhost:5000/amigos", function (data) {
//         // vanilla javascript
       
//         var arrLista = [];
//         console.log(data);

//         cantReg = (Object.keys(data).length); //para ver cant de registros de un json
        
//     // creo  <li> en DOM con registros JSON
//         for(i=0; i<cantReg; i++){
//             arrLista[i]= document.createElement('li');
//             listaAmigos.append(arrLista[i]);
//             arrLista[i].innerText = `id: ${data[i].id}, name: ${data[i].name}, age: ${data[i].age}, Email: ${data[i].email}`

//            amigos[i]= data[i].name;
          
            
//         }

        
//     });
    
// })
// //---------------FIN GET ---------------------------------
// console.log(amigos);

// var btnBuscar = document.getElementById('search');
// var input = document.getElementById('input');

// var amigo = document.getElementById('amigo');





// btnBuscar.addEventListener('click', function(){
   
//     nroId = input.innerText;
//     amigo.innerText = amigos[nroId -1];
// })
var getAmigos = ()=>{
    var list = document.getElementById('lista');
    list.innerHTML = "";
    //hago el get al back
    $.get('http://localhost:5000/amigos', data =>{
        for (let i = 0; i < data.length; i++) {
            list.innerHTML += `<li>${data[i].name}</li>`            
        }
        
    })
}

$('#boton').click(getAmigos)

//-------------
$('#search').click(()=>{
    $('#amigo').text('');
    var id = $('#input').val();
    $.get(`http://localhost:5000/amigos/${id}`, data =>{
        $('#amigo').text(data.name);
       
    })
})
// forma tradicional con selectores--------------------
// var search = document.getElementById('search');
// search.addEventListener('click',function(){
//     var id = document.getElementById('input').value ;
//     console.log(id);
//     $.get(`http://localhost:5000/amigos/${id}`, data =>{
//         var amigo = document.getElementById('amigo');
//         amigo.innerText = data.name;
//     })
// })

//---------- DELETE -------------
var name;
$('#delete').click(()=>{
    id = $('#inputDelete').val();
    //como quiero que en el mensaje aparezca el nombre del amigo eliminado
    $.get(`http://localhost:5000/amigos/${id}`, data =>{
       name = (data.name);
       
    })

    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success:() =>{
            $('#success').text(`Amigo ${name} borrado con exito`)
            getAmigos();
        }
    })
})





