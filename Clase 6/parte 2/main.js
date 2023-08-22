/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar cuanod la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuanod la condicion es verdadera
}else{
  codigo a ejecutar cuando la condición no es verdadera
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo e repetir
}

while(condicion){
  codigo a ejecutar siempre que la condicion sea verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("bienvenido");

/*
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo e ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);

const nombreFuncion = (parm1, parm2, ..., parmn) => {
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// const sumar = (num1, num2) => num1 + num2;

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }

//   info() {
//     console.log(`Hola, soy ${this.nombre}`);
//   }
// }

// const producto1 = new Producto("camisa", 1000);
// console.log(producto1.nombre);
// console.log(producto2.nombre);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 750 },
//   { id: 4, nombre: "media", precio: 350 },
// ];

// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

// let producto = productos.find((item) => item.id === 1);
// console.log(producto);
// producto.precio = 45;

// let productosFiltrados = productos.filter((item) => item.precio > 700 && item.nombre.includes("ca"));
// console.log(productosFiltrados);

// const info = productos.map((item) => {
//   return {
//     nombre: item.nombre,
//     precio: item.precio,
//   };
// });

// console.log(info);

// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 500 },
//   { id: 3, nombre: "zapato", precio: 750 },
//   { id: 4, nombre: "media", precio: 350 },
// ];

// const agregarCarrito = (id) => {
//   let producto = productos.find((item) => item.id === id);
//   let mensaje = `
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `;

//   alert(mensaje);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <div class="color">
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar al carrito</button>
//     </div>
//   `;
//   document.body.append(div);

//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregarCarrito(item.id));
// });

//traemos el formulario
// let formulario = document.getElementById("formulario");

// //contenedor donde mostramos los productos
// let contenedor = document.getElementById("contenedor");
// const carrito = [];

// //funcion para mostrar los productos en la pagina
// const renderizar = (carrito) => {
//   //antes de mostrar los productos en la pagina borramos el contenedor
//   contenedor.innerHTML = "";
//   carrito.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>Id: ${item.id}</h2>
//       <p>Nombre: ${item.nombre}</p>
//       <b>$${item.precio}</b>
//     `;
//     contenedor.append(div);
//   });
// };

// //agregamos el evento submit al formulario
// formulario.addEventListener("submit", (e) => {
//   //evitamos que el formulario se recargue
//   e.preventDefault();

//   //traemos los inputs
//   let inputs = e.target.children;
//   let nombre = inputs[0].value;
//   let precio = inputs[1].value;

//   //agregamos el nuevo producto al carrito
//   // Math.max(...carrito.map(item => item.id)) + 1
//   carrito.push({ id: carrito.length + 1, nombre, precio });

//   //mostramos el carrito en la pagina
//   renderizar(carrito);
// });
