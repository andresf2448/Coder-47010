// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(5));

// function generarOperacion(operacion) {
//   if (operacion === "sumar") {
//     return (num1, num2) => num1 + num2;
//   }

//   if (operacion === "restar") {
//     return (num1, num2) => num1 - num2;
//   }

//   if (operacion === "multiplicar") {
//     return (num1, num2) => num1 * num2;
//   }

//   if (operacion === "dividir") {
//     return (num1, num2) => num1 / num2;
//   }
// }

// let suma = generarOperacion("sumar"); //(num1, num2) => num1 + num2;
// console.log(suma(3, 4));

// function iterador(arreglo, funcion) {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// }

// iterador([12, 34, 56, 78, 5], console.log);

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

//forEach recorre el arreglo
// productos.forEach((item) => {
//   console.log(item.nombre);
//   console.log(item.precio);
//   console.log(item.id);
// });

//find encuentra un elemento del arreglo dada la condicion
// const producto = productos.find((item) => item.nombre === "camisa");
// console.log(producto);

// let nombre = prompt("Ingrese el nombre del producto a verificar");

// while (nombre != "ESC") {
//   const producto = productos.find((item) => item.nombre === nombre);

//   if (producto) {
//     let mensaje = `
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: $${producto.precio}
//   `;

//     alert(mensaje);
//   } else {
//     alert("producto no identificado");
//   }

//   nombre = prompt("Ingrese el nombre del producto a verificar");
// }

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

//filter filtra el arreglo dad una condicion
// const filtrados = productos.filter((item) => item.precio > 500);
// console.log(filtrados);

// let precio = parseInt(prompt("Ingrese el precio minimo"));

// const filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//   alert(mensaje);
// });

//some valida si existe al menos un elemento que cumple la condicion
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "camisa12341234"));

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

//map transforma la informacion
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nuevosPrecios = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(nuevosPrecios);

//reduce reduce un arreglo a un solo valor
// const numeros = [2, 3, 5, 7, 8];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "media", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 1200 },
//   { id: 4, nombre: "camisa", precio: 375 },
// ];

// const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(total);

// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// forEach, find, filter, map
