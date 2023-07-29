/* 
function nombreFuncion(){
  codigo a ejecutar por la funcion
}

para ejecutar o invocar la funcion hacemos nombreFuncion()
*/

// function saludar() {
//   console.log("hola");
// }

// saludar();

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`su nombre es ${nombre}`);
// }

// saludar();

/* 
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

para ejecutar o invocar la funcion hacemos nombreFuncion(valor1, valor2, ..., valorn)
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "Andrés");
// saludar("Bienvennida", "Camila");

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// sumar(5, 6);
// sumar(2, 4);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let resultado = sumar(7, 8);
// console.log(`su resultado es ${resultado}`);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no identificada";
//       break;
//   }
// }

// let num1 = parseInt(prompt("Ingrese el numero uno"));
// let num2 = parseInt(prompt("Ingrese el numero dos"));
// let operacion = prompt("Ingrese la opreacion");

// let resultado = calculadora(num1, num2, operacion);
// alert(`El resultado es ${resultado}`);

// let resultado;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   var nombre = "andres";
// }
// console.log(nombre);

// const sumar = function (a, b) {
//   return a + b;
// };

// console.log(sumar(5, 5));

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(5, 6));
// (a, b) => a + b
// () => {
//  codigo de la funciion

//  return
// }
// x => x + 6

// console.log(sumar(5, 6));

// function sumar(a, b) {
//   return a + b;
// }

// const suma = (a, b) => {
//   return a + b;
// };

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const iva = (valorProducto) => valorProducto * 0.21;

let precioProducto = 1000;
let descuento = 100;

// precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// = resta(suma(1000, iva(1000)), 100);
// = resta(suma(1000, 210), 100);
// = resta(1210, 100);
// = 1110
console.log(nuevoPrecio);
