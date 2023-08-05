/* 
estructura de un arreglo

[elemento1, elemento2, ..., elementon];
*/

// const vacio = [];
// const numeros = [3, 4, 67];
// const nombres = ["andres", "camila", "sofi"];
// const valores = [true, false, false, true];
// const varios = [1, "andres", true];

// console.log(nombres[0]);
// console.log(nombres[2]);
// console.log(numeros[0] + numeros[2]);

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

// const nombres = ["andres", "camila"];

// //push permite agregar un elemento al final del arreglo
// nombres.push("sofia");
// console.log(nombres);

// //unshift permite agregar un elemento al inicio del arreglo
// nombres.unshift("matias");
// console.log(nombres);

// //pop permite eliminar un elemento del final del arreglo
// nombres.pop();
// console.log(nombres);

// //shift permite sacar un elemento del inicio del arreglo
// nombres.shift();
// console.log(nombres);

//splice permite eliminar una cantidad de elementos según los indices
// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];
// nombres.splice(1, 3);
// console.log(nombres);
// nombres.splice(1, 0, "pepito");
// console.log(nombres);

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

//join permite generar un string cons todos los  elementos del arreglo
// console.log(nombres.join("     "));

//concat generar un arreglo con los elementos de varios arreglos
// const mascotas = ["firu", "max"];
// const varios = nombres.concat(mascotas);
// console.log(varios);

//slice permimte hacer una copia de un fragmento del arreglo
// const copia = nombres.slice(2, 4);
// console.log(copia);

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

//indexOf permite buscar la posicion de un elemento pasado por parámetro
// console.log(nombres.indexOf("camila"));
// console.log(nombres.indexOf("camila1234"));

//includes permite validar si un elemento está o no dentro del arreglo
// console.log(nombres.includes("pepito"));
// console.log(nombres.includes("carlos"));

// let nombre = prompt("Ingrese el usuario a validar");

// if (nombres.includes(nombre)) {
//   alert("El usuario está en la lista");
// } else {
//   alert("El usuario no está en la lista");
// }

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

// nombres.reverse();
// console.log(nombres);

// const nombres = ["andres", "camila", "sofi", "vanesa", "carlos"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("vanesa");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 800 },
//   { id: 3, nombre: "media", precio: 350 },
//   { id: 4, nombre: "gorra", precio: 770 },
// ];

// for (const producto of productos) {
//   console.log(producto);
// }

//creamos la clase constructora de los productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

//arregloq ue va a contener los productos creados
const productos = [];

//agregamos los productos creados por la clase Producto al arreglo
productos.push(new Producto("camisa", 1000));
productos.push(new Producto("zapato", 750));
productos.push(new Producto("gorra", 720));
productos.push(new Producto("media", 10));

//pedimos el nombre del producto a consultar
let nombre = prompt("Ingrese el nombre del productoa  consultar");

while (nombre != "ESC") {
  //declaramos la variable que contendrá el producto en caso de encontrarlo
  let producto;

  //recorremos el arreglo verificando si alguno de los productos cumple con el nombre
  for (const item of productos) {
    if (item.nombre === nombre) {
      producto = item;
    }
  }

  if (producto) {
    let mensaje = `
      Nombre: ${producto.nombre}
      Precio: $${producto.precio}
    `;

    alert(mensaje);
  } else {
    alert("El producto no se encuentra disponible");
  }

  nombre = prompt("Ingrese el nombre del productoa  consultar");
}
