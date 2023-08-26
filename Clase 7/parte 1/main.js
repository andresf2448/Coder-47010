//OPERADOR ++

// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
estructura de un operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando condicion falsa;
*/

// let edad = 14;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("No eres mayor de edad");
// }

// let edad = 20;

// edad >= 19 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");

// const usuario = {
//   nombre: "andres",
//   edad: 10,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "andres",
//   edad: 10,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a al fiesta");

/* 
valor1 && valor2 retorna valor1 si este es falso, en caso contrario retorna el valor2
valor1 || valor2 retorna valor1 si este en verdadero, en caso contrario retorna el valor2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "andres",
//   edad: 20,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy");//falsy
// console.log(40 || "Falsy");//40
// console.log(null || "Falsy");//falsy
// console.log(undefined || "Falsy");//falsy
// console.log("Hola Mundo" || "Falsy");//hola mundo
// console.log("" || "Falsy");//falsy
// console.log(NaN || "Falsy");//falsy
// console.log(true || "Falsy");//true
// console.log(false || "Falsy");//falsy

// const usuario1 = {
//   nombre: "andres",
//   edad: 20,
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario2 = null;

// console.log(usuario2?.nombre || "El usuario no existe");

// const usuario1 = {
//   nombre: "andres",
//   edad: 20,
//   cursos: {
//     javascript: "Aprobado",
//   },
// };

// console.log(usuario1?.cursos?.javascript || "La popiedad no existe");
// console.log(usuario1?.cursos?.react || "La popiedad no existe");

// const usuario = {
//   nombre: "andres",
//   edad: 40,
//   direccion: "AV",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// const { nombre, edad, direccion } = usuario;

// console.log(nombre);

// const usuario = {
//   nombre: "andres",
//   edad: 40,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: 234,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { casa: casaTelefono },
// } = usuario;

// console.log(casaTelefono);

// const mascota = {
//   nombre: "firu",
//   edad: 3,
//   propietarios: {
//     propietario1: {
//       nombre: "raquel",
//       edad: 24,
//     },
//     propietario2: {
//       nombre: "juan",
//       edad: 60,
//     },
//   },
// };

// const {
//   nombre,
//   propietarios: {
//     propietario1: { nombre: nombrePropietario1, edad: edadPropietario1 },
//     propietario2: { nombre: nombrePropietario2, edad: edadPropietario2 },
//   },
// } = mascota;

// console.log(nombre);
// console.log(nombrePropietario1, edadPropietario1);
// console.log(nombrePropietario2, edadPropietario2);

// const productos = [
//   {
//     id: 1,
//     nombre: "camisa",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//   },
//   {
//     id: 2,
//     nombre: "gorra",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//   },
//   {
//     id: 3,
//     nombre: "media",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//   },
//   {
//     id: 4,
//     nombre: "zapato",
//     precio: 1000,
//     materiales: { material1: "tela", material2: "pintura" },
//   },
// ];

// productos.forEach((item) => {
//   const {
//     nombre,
//     id,
//     precio,
//     materiales: {material1, material2},
//   } = item;

//   console.log(nombre);
//   console.log(id);
//   console.log(precio);
//   console.log(material1, material2);
// });

// const desestructurar = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

// const usuario = { nombre: "juan", edad: 18, direccion: "AV" };

// desestructurar(usuario);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// const [ , , c] = nombres;

// console.log(c);

//SPREAD OPERATOR (...)

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

// let persona1 = { nombre: "andres", edad: 45 };
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);
// console.log(persona2);

// let persona1 = { nombre: "andres", edad: 45 };
// let persona2 = { ...persona1, nombre: "camila", direccion: "AV" };

// console.log(persona2);

const sumar = (...numeros) => {
  console.log(numeros.reduce((acum, item) => acum + item, 0));
};

sumar(1, 2, 4, 5, 7, 7);
sumar(1, 2);
