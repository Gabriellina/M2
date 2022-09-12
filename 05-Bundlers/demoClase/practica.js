// --------------CLOUSURE , FUNCION AUTOINVOCADA y EXPOSICION DE UNA VARIABLE (window.algo---------------

const weekDay = function(){
    var names = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves','viernes','sabado'];
    window.algo='algo';
    return{
        name: function name(number){return names[number];},
        number: function number(name){return names.indexOf(name);}
    };
}();
weekDay.name(3);

