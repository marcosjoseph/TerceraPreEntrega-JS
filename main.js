
// const Madera= function (proyecto, nombreMadera, cantidad, largo, ancho, grosor){
// const pulgada = 2.54;
// this.proyecto = proyecto;
// const pie = 30;
// this.nombreMadera = nombreMadera;
// this.cantidad = cantidad;
// this.largo = largo;
// this.ancho = ancho;
// this.grosor = grosor;
// this.pies = pies;
// }

// let maderas = [];

// function calcularMadera () {
//     let proyecto = document.getElementById("Proyecto").value;
//     let nombreMadera = document.getElementById("Madera").innerText;
//     let cantidad = document.getElementById("Cantidad").innerText;
//     let largo = document.getElementById("Largo").innerText;
//     let ancho = document.getElementById("Ancho").innerText;
//     let grosor = document.getElementById("Grosor").innerText;
//     let pies = document.getElementById("Pies");
//     let totalPies = parseFloat((cantidad * (largo/30) * (ancho/2.54) * (grosor/30)).toFixed(2)); 

//     pies.innerText = "totalPies";
    

//     let madera = new Madera (proyecto, nombreMadera, cantidad, largo, ancho, grosor, pies)

//     let boton = document.getElementById ("calcularOtra");

//     boton.addEventListener ("click", ()=> {
//         console.log("gil");
        
//     });
// }

const Calculo = function (proyecto, nombreMadera, cantidad, largo, ancho, grosor, pies) {
    this.proyecto = proyecto;
    this.nombreMadera = nombreMadera;
    this.cantidad = cantidad;
    this.largo = largo;
    this.ancho = ancho;
    this.grosor = grosor;
    this.pies = pies;
}

let calculos = [];

boton = document.getElementById ("calcularOtra").addEventListener("click", ()=> {
event.preventDefault();
let proyecto = document.getElementById ("Proyecto").value;
let nombreMadera = document.getElementById ("Madera").value;
let cantidad = parseInt(document.getElementById("Cantidad").value);
let largo = parseInt(document.getElementById ("Largo").value);
let ancho = parseInt(document.getElementById ("Ancho").value);
let grosor = parseInt(document.getElementById ("Grosor").value);
let pies = parseInt((cantidad * (largo/30) * (ancho/2.54) * (grosor/30)).toFixed(2));
let resultado = document.getElementById("Pies").value = pies;

let calculo = new Calculo (proyecto, nombreMadera, cantidad, largo, ancho, grosor, pies);

calculos.push(calculo);
console.table (calculos);
agregarFila()

})

function agregarFila() {
    let contenidoFila = '<td>' + calculos.proyecto + '</td>' + '<td>' + calculos.nombreMadera + '</td>' + '<td>' + calculos.pies + '</td>';
    let crearFila = document.createElement("TR");
    crearFila.innerHTML = contenidoFila;
    let cuerpoTabla = document.getElementById ("cuerpoTabla");
    document.cuerpoTabla.appendChild(crearFila)
}








