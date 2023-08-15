const Calculo = function (proyecto, nombreMadera, pieza, cantidad, largo, ancho, grosor, pies) {
    this.proyecto = proyecto;
    this.nombreMadera = nombreMadera;
    this.pieza = pieza;
    this.cantidad = cantidad;
    this.largo = largo;
    this.ancho = ancho;
    this.grosor = grosor;
    this.pies = pies;
}

let calculos = [];

let calculo;

btnCalcular = document.getElementById ("btnCalcular").addEventListener("click", ()=> {
event.preventDefault();
let proyecto = document.getElementById ("Proyecto").value.toUpperCase().trim();
let nombreMadera = document.getElementById ("Madera").value.toUpperCase().trim();
let pieza = document.getElementById ("Pieza").value.toUpperCase().trim();
let cantidad = parseInt(document.getElementById("Cantidad").value);
let largo = parseInt(document.getElementById ("Largo").value);
let ancho = parseInt(document.getElementById ("Ancho").value);
let grosor = parseInt(document.getElementById ("Grosor").value);
let pies = parseInt((cantidad * (largo/30) * (ancho/2.54) * (grosor/30)).toFixed(2));
let resultado = document.getElementById("Pies").value = pies;

calculo = new Calculo (proyecto, nombreMadera, pieza, cantidad, largo, ancho, grosor, pies);

if(proyecto!==null && nombreMadera!==null && pieza!==null && proyecto!=="" && nombreMadera!=="" && pieza!=="" && !isNaN(cantidad) && !isNaN(largo) && !isNaN(ancho) && !isNaN(grosor)){
    calculos.push(calculo);
    console.table (calculos);
    agregarFila()
} else {alert("Por favor, completá todos los campos e ingresá valores válidos.")}

})

function agregarFila() {
    let contenidoFila = '<td>' + calculo.proyecto + '</td>' + '<td>' + calculo.nombreMadera + '</td>' + '<td>' + calculo.pieza + '</td>'+ '<td>' + calculo.pies + '</td>';
    let crearFila = document.createElement("tr");
    crearFila.innerHTML = contenidoFila;
    let cuerpoTabla = document.getElementById ("cuerpoTabla");
    cuerpoTabla.appendChild(crearFila);
}

function guardarCalculo() {
    let calculoJSON = JSON.stringify(calculos);
    localStorage.setItem("dataCalculo", calculoJSON);
}

let btnGuardar = document.getElementById("btnGuardar").addEventListener("click", ()=> {
    guardarCalculo()
});

let btnBuscar = document.getElementById ("btnBuscar").addEventListener("click", ()=> {
    let maderaBuscada = document.getElementById("maderaBuscada").value.toUpperCase();
    let sumaPies = 0;

    let maderaEncontrada = calculos.filter((i) => i.nombreMadera == maderaBuscada);
    maderaEncontrada.forEach((madera)=>{
        sumaPies += madera.pies;
        resultadoBusqueda(maderaBuscada,sumaPies)})})
    
function resultadoBusqueda(maderaBuscada,sumaPies) {
    let resultadoBusqueda = document.getElementById("resultadoBusqueda");
    resultadoBusqueda.innerHTML = `En total necesitás ${sumaPies} pies de ${maderaBuscada}.`;
};

function errorBusqueda (maderaBuscada) {
    let resultadoBusqueda = document.getElementById("resultadoBusqueda");
    resultadoBusqueda.innerHTML = `No se ha encontrado la madera ${maderaBuscada}`;
}