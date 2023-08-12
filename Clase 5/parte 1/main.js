//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName
// let divs = document.getElementsByTagName("div");

// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//modificació de nodos
// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion deseada");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
//   saludo.className = "verde";
// }

//Agregar o quitar nodos
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); //creación de la etiqueta
// parrafo.innerHTML = "<h1>Hola a todos</h1>"; //asignación de contenido
// document.body.append(parrafo);
// contenedor.append(parrafo); //asignación del padre

// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// let contenedor = document.getElementById("contenedor");
// const personas = ["juan", "Luis", "camila", "andres", "fabian"];

// personas.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `<h1>${item}</h1>`;
//   document.body.append(div);
// });

let contenedor = document.getElementById("contenedor");
contenedor.className = "rojo";

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 450 },
  { id: 3, nombre: "media", precio: 370 },
  { id: 4, nombre: "zapato", precio: 200 },
];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  contenedor.append(div);
});
