// estructura del fetch    fetch(url, config);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   })
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Publicación Coder",
//     body: "Nuestra primera publicación en coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <h2>Id: ${producto.id}</h2>
//         <p>Nombre: ${producto.nombre}</p>
//         <b>$${producto.precio}</b>
//       `;

//       document.body.append(div);
//     });
//   });

let listado = document.getElementById("listado");

const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2>${publicacion.title}</h2>
      <p>${publicacion.body}</p>
    `;

      listado.append(li);
    });
  } catch (error) {
    const div = document.createElement("div");
    div.innerHTML = `Error ${error}`;

    document.body.append(div);
  }
};
traerDatos();
