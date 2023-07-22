/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera o represeta algo verdadero
}
*/

// if(true){
//   console.log("entramos");
// }

// console.log("terminamos");

// if(-20){
//   console.log("entramos");
// }

// console.log("terminamos");

/* 
= asignación
== comparación de valor
=== comparación tanto de valor como de tipo de dato
}
*/

// let edad = 12;

// if (edad >= 18) {
//   console.log("Puede entrar a la fiesta");
// }

/* 
estructura del if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera o represeta algo verdadero
}else{
  codigo a ejecutar cuando la condicion es falsa o represeta algo falso
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   alert("Puedes entrar a la fiesta");
// } else {
//   alert("No puedes entrar a la fiesta");
// }

// let respuesta = prompt("Terminaste la tarea?");

// if (respuesta.toLowerCase() === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad (numero)"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   alert("Puedes entrar con un adulto responsable");
// } else {
//   alert("Puedes entrar a la fiesta");
// }

/* 
valor1 && valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso

valor1 || valor2 es verdadero cuando al menos uno de los dos es verdadero, en caso contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(`Hola ${nombre} ${apellido}`);
// } else {
//   alert('Nombre y apellido requeridos');
// }

// let nombre = "andres";
// console.log("Hola " + nombre);
// console.log(`Hola ${nombre}`);

// let nombre = "andres";
// let edad = 16;
// let saludo = `Hola ${nombre} tienes ${edad}`;
// console.log(saludo);

// let nombre = prompt("Ingrese el nombre").toLowerCase();

// if (nombre != "" && (nombre === "ANA" || nombre === "ana")) {
//   alert(`Hola ${nombre}`);
// } else {
//   alert("No eres Ana");
// }
