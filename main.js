console.log("Manuela")
alert("Manuela")
document.querySelector("body").append("Manuela");


//Declarando variables

var numUno, numDos;

//Tipado dinamico en JS
var hola = "helado";

//Tipos de datos en JS

//LOS PRIMITIVOS
//String
var planta = "fruta";

//number
var estatura = 166;
var decimal = 1.66;

//Boolean
var pelota = true;

//undefined
var Mosquito;

//TIPOS DE OBJETO

var Outfit = 
{
    pantalon: "negro",
    prendas: "4",
    atractivo: "true",
};

//Operador typeof
var vaso = "<br>agua";
var num = 45;
var sleep = false;
var papas = "salchipapa";

console.log(typeof vaso);
console.log(typeof num);
console.log(typeof sleep);
console.log(typeof papas);


//para hacer de un primitivo un objeto(Wrapper object)
var edad = 17;
var real = new Number (17);

//cambiar de lugar 
var saludo = "<br>hola";
var want = "<br>quiero";
console.log(vaso);

document.querySelector("body").insertAdjacentHTML("beforebegin", saludo);
document.querySelector("body").insertAdjacentHTML("beforeend", want);
document.querySelector("body").insertAdjacentHTML("beforeend", vaso);











