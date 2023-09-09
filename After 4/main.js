/* 
estructura de una promesa

new Promise((resolve, reject) => {
  cuerpo o código de la promesa
})
*/

//then catch  =====  async await     try catch

// const traerDatos = async () => {
//   try {
//     const response = await fetch("http:///1234/ksljadfhg");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();

//   data.results.forEach((character) => {
//     let item = document.createElement("div");
//     item.innerHTML = `
//       <h1>${character.name}</h1>
//       <p>${character.status}</p>
//       <p>${character.gender}</p>
//       <img src="${character.image}">
//       <hr/>
//     `;

//     document.body.append(item);
//   });
// };

// getCharacters();
//name, status, gender, image
// class Producto{
//   constructor(nombre, ...)
// }

// const productos = [];

// const traerData = async () => {
//   const response = await fetch("./data.json");
//   const data = await response.json();

//   data.forEach(item => {
//     productos.push(new Producto(item.nombre, ...))
//   });
//   //renderizamos la información
// };

// traerData();
