/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// let nombre = "pepito";
// let edad = 34;
// let direccion = "AV";

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// let clave = "edad"
// alert(persona[clave]);

// let info = `Su nombre es ${persona.nombre}, edad: ${persona.edad}, direccion: ${persona.direccion}`;
// console.log(info);

// let persona = {
//   nombre: "pepito",
//   edad: 34,
//   direccion: "AV",
// };

// persona.nombre = "andres";
// persona["telefono"] = 1234;

// alert(persona);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");
// const persona2 = new Persona("jaime", 26, "AV1");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   nombre: "andres",
//   edad: 26,
//   direccion: "AV",
// });

// for(const clave in persona1){
//   console.log(clave, persona1[clave]);
// }

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.hablar = function () {
//     console.log(`hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona({
//   nombre: "andres",
//   edad: 26,
//   direccion: "AV",
// });

// persona1.hablar();

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.hablar = function () {
//     console.log(`hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// console.log(persona1);
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "RECOMENDADO Monitor gamer curvo Samsung C27R500FHL",
//   867212,
//   "http://asjkfdgh"
// );

// const producto2 = new Producto(
//   "RECOMENDADO Monitor gamer Samsung F24T35 led 24 azul y gris",
//   666131,
//   "http://asdfhg"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto(
  "RECOMENDADO Monitor gamer curvo Samsung C27R500FHL",
  867212,
  "http://asjkfdgh",
  5
);

console.log(producto1);
producto1.vender();
producto1.vender();
producto1.vender();
console.log(producto1);
