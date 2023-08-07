// // creación de una clase
// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// // cargar un arreglo con elementos de la clase
// const personas = [];

// personas.push(new personalbar("andres", 1234));
// personas.push(new personalbar("andres", 1234));

// //filter, find, map

class Libro {
  constructor(nombre, autor, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
    this.vendido = false;
  }

  vender() {
    this.vender = true;
  }
}

const libros = [];

libros.push(new Libro("libro1", "autor1", 123));
libros.push(new Libro("libro2", "autor2", 200));
libros.push(new Libro("libro3", "autor3", 350));
libros.push(new Libro("libro4", "autor4", 100));

const nuevosPrecios = libros.map((item) => {
  return {
    nombre: item.nombre,
    autor: item.autor,
    precio: item.precio - item.precio * 0.21,
  };
});

let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = nuevosPrecios.filter((item) => item.precio > precio);

filtrados.forEach((item) => {
  let mensaje = `
    Nombre: ${item.nombre}
    Autor: ${item.autor}
    Precio: $${item.precio}
  `;

  alert(mensaje);
});
