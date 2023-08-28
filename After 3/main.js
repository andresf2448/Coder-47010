// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//crear una funcion que recibe como parametro un nombre de un producto y un precio nuevo, dicha funcion actualiza el producto con el nuevo precio

// const actualizarPrecio = (nombre, nuevoPrecio) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let producto = data.find((item) => item.nombre === nombre);
//   producto.precio = nuevoPrecio;

//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto a modificar su precio");
// let precio = parseInt(prompt("Ingrese el nuevo precio"));

// actualizarPrecio(nombre, precio);

//crear una funcion que reciba el nombre y el precio y agregue dicho producto al storage

// const agregarProducto = (nombre, precio) => {
//   let storage = localStorage.getItem("carrito");
//   let data = JSON.parse(storage);

//   let nuevoProducto = {
//     id: data.length + 1,
//     nombre,
//     precio,
//   };

//   data.push(nuevoProducto);
//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = parseInt(prompt("Ingrese el precio"));

// agregarProducto(nombre, precio);

//crear una funcion que reciba el nombre de un producto y lo elimine en el storage

const eliminarProducto = (nombre) => {};
