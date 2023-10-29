import{barcelona,roma,paris,londres} from './ciudades.js'
// obtener los elementos del DOM
let enlaces= document.querySelectorAll('a')
let tituloElemento= document.getElementById('titulo')
let subtituloElemento =document.getElementById('subtitulo')
let parrafoElemento= document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// agregamos un evento click en cada enlace
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active') ;

        })        
        // agregar enlace Active al enlace actual
        this.classList.add('active')
        // obtener el contenido correspondiente segun el enlace
         //mostrar el contenido en el DOM
        let contenido = obtenerContenido (this.textContent)
        tituloElemento.innerHTML=contenido.titulo
        subtituloElemento.innerHTML=contenido.subtitulo
        parrafoElemento.innerHTML=contenido.parrafo
        precioElemento.innerHTML=contenido.precio
    });
});
// remover Active al que corresponda
// traer el obejto al que correspondiente a la eleccion

// FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CUIDADES.JS
function obtenerContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres,
    };
    return contenido[enlace];

  }
