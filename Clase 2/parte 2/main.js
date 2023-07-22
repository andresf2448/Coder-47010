/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// i++ === i = i + 1 === i += 1

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Se acabaron los turnos");

// for (let i = 1; i <= 10; i++) {
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if(i === 5){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del while

while(condicion){
  codigo a ejecutar cada vez que la condicion sea verdadera
}
*/

// let repetir = true;  Bucle infinito

// while (repetir) {
//   console.log("Entramos");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
do{
  codigo a ejecutar por primera vez y siempre que al condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("hola");
// }

// do {
//   console.log("hola");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando valor === valor1
    break;

  case valor2:
    codigo a ejecutar cuando valor === valor2
    break;

  .
  .
  .

  default:
    codigo a ejecutar en caso de que el valor no coincida con ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de argentia");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
