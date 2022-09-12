var traverseDomAndCollectElements = function(matchFunc, startEl=document.body) {
 
console.log(startEl)

elemento= startEl.localName;

elemento
//startE1 is not defined DA ERROR ----OBJECT NOT ITERABLE

  ////la primera vez que la invoco, le asigna el nodo raiz, el document.body

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  var resultSet = [];
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(elemento))resultSet.push(elemento.localName);

  // TU CÓDIGO AQUÍ
   //recorro los hijos con .children
  for(let i=0; i< startEl.children.length; i++){ 
    //recursividad
    var result = traverseDomAndCollectElements(matchFunc, startE1.children[i]);
    //spread operator
    resultSet = [...resultSet,...result]; 
  }
  return resultSet;  
};

// /**
//  * body.children --->[div, div]
//  * ".myClass"
//  * 
//  * body
//  * |----> div class = 'myClass'
//  * |       |---> h1
//  * |       |---> h1 class = 'myClass'
//  * |
//  * |----> div
//  */

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // devolver que tipo de elemento es,
  // selectorTypeMatcher('#primero') -->  id
  // selectorTypeMatcher('.segundo') ---> class
  // selectorTypeMatcher('div')---------> tag
  // selectorTypeMatcher('div.tercero')-> tag.class  ---> selector.split('.') --> [tag, class], si este arreglo resultante.length >1, entonces tenemos un selector tipo tag.class

  if(selector[0]=== '#'){
    return 'id';
  }else if(selector[0]==='.'){
    return 'class';
  }
  if (selector.split('.').length > 1){
    return 'tag.class';
  }
  return 'tag'; //si no es ninguna de las anteriores devuelve 'tag'
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  //recibe un elemento y me dice si coincide o no con el selector  
  //------------------------------------------------------
   // DONDE PASA EL PARAMETRO el ????????????????????    ||
   //-------------------------------------------------------
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  //----------------- construye la fn matchFunction segun selectorType y el -------------------------
  if (selectorType === "id") { 
    // el selector, el 'id' en un DOM, no tiene el # adelante,
    //elemento.id ---> string, ej: 'pagetitle'
    //selector #id, .nombreclase , tagnombre, tagnombre.nombreclass
    //selectorType --> 
    //el --> div, p, h1, id, div.className

    matchFunction = function(el){
      return `#${el.id}` === selector; //devuelve true o false
    }
   
  } else if (selectorType === "class") {
    //<div class="clase1 clase2 clase3"
    matchFunction = function(el){
      selectorSinPunto = selector.slice(1)
      return el.classList.contains(selectorSinPunto);
      // let classes = el.classList;
      // classes.forEach(e=>{if(`.${e}`===selector)return true;})
      // return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      //newSelector = selector.split('.');
      //clase = newSelector[1];
      //uso DESTRUCTURING
      var[tag, clase] = selector.split('.');
      return el.classList.contains(clase);
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(el){
      //los tags, o elementos del DOM tienen una propidedad que se llama .localName, que tira el nombre del tag, ej: 'div'
      return selector == el.localName;
      // el.tagName es en mayuscula, habria que comparar convirtiendo en mayuscula al selector DIV
      //return el.tagName === selector.toUpperCase()
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

$('div')
