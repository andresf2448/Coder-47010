// let boton = document.getElementById("boton");

//primera forma de declarar un evento
// boton.addEventListener("click", () => {
//   alert("click");
// });

//segunda forma de declarar un evento
// boton.onclick = () => {
//   console.log("click");
// };

// let evento = prompt("Ingrese el evento");
// boton.addEventListener(evento, () => {
//   alert("click");
// });

//////////////////////////////////////////////
// boton.addEventListener("click", () => {
//   console.log("click");
// });
//////////////////////////////////////////////

//////////////////////////////////////////////
// const respuesta = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => respuesta("andres"));
//////////////////////////////////////////////

let boton = document.getElementById("boton");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "verde";
//   } else {
//     saludo.className = "amarillo";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;

//   if (!inputs[0].value.includes("@")) {
//     inputs[0].value = "";
//   }
// });
