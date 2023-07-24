/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// for (let i = 1; i < 10; i++) {
//   console.log("Hola");
// }

/* 
while(condicion){
  codigo a repetir en caso de que la condicion sea verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "andres"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

//hacer un algoritmo que diga si un número es primo o no

// let numero = 20;
// let cantidadDivisores = 0;

// for (let i = 1; i <= numero; i++) {
//   if (numero % i === 0) {
//     cantidadDivisores++; // cantidadDivisores = cantidadDivisores + 1;
//   }
// }

// if (cantidadDivisores === 2) {
//   console.log("Es un primo");
// } else {
//   console.log("No es primo");
// }

// ingresar un número, si se ingresa "ESC" el flujo termina pero si es diferente de ESC debe mostrar por consola lo siguiente

/* 
1 => Tomate
2 => Papa
3 => Carne
4 => Pollo
otro diferente => No esta dentro de la lista
*/

let numero = prompt("Ingrese un numero");

while (numero != "ESC") {
  switch (numero) {
    case "1":
      alert("Tomate");
      break;

    case "2":
      alert("Papa");
      break;

    case "3":
      alert("Carne");
      break;

    case "4":
      alert("Pollo");
      break;

    default:
      alert("No esta dentro de la lista");
      break;
  }

  numero = prompt("Ingrese un numero");
}
