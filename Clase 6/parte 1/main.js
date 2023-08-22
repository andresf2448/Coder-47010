//LOCALSTORAGE

// console.log(localStorage);

//setItem(clave, valor) guardar en el storage el par clave valor
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", 4);

//getItem(clave) recupera del storage el valor correspondiente a la clave
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// for (let index = 0; index < localStorage.length; index++) {
//   let clave = localStorage.key(index);
//   console.log("clave obtenida", clave);
//   console.log("valor obtenido", localStorage.getItem(clave));
// }

//ELIMINAR EL STORAGE
//localStorage.removeItem(clave) elmina un valor del storage por su clave
//localStorage.clear() elimina todo el storage

//SESSIONSTORAGE
// console.log(sessionStorage);
// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("valor", "true");
// sessionStorage.setItem("numero", 4);

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let index = 0; index < sessionStorage.length; index++) {
//   let clave = sessionStorage.key(index);
//   console.log("clave obtenida", clave);
//   console.log("valor obtenido", sessionStorage.getItem(clave));
// }

//sessionStorage.removeItem(clave) elmina un valor del storage por su clave
// sessionStorage.clear() elimina todo el storage

//JSON.stringify
// let objeto = {
//   nombre: "pepito",
//   edad: 24,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let numeros = [2, 3, 4, 6];
// localStorage.setItem("arreglo", JSON.stringify(numeros))

//JSON.parse
// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 370 },
//   { id: 4, nombre: "media", precio: 1250 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Hola nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 370 },
//   { id: 4, nombre: "media", precio: 1250 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//boton para eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito = [];

//me traigo el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo cargo si no coloco en el dom que no hay productos
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>No hay productos en el carrito</h2>
  `;

  document.body.append(div);
}

//recorro el carrito y muestro en el dom los productos carrito
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//elimino el storage, muestro el alert y recargo la pagina
eliminar.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  alert("Carrito eliminado");
});
