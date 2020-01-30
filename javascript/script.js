// DECLARACION DE VARIABLES.

var queridos = [];
var noQueridos = [];
var acumulador;
// FIN DECLARACION DE VARIABLES.

async function start() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/list/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

start()
  .then(function(data) {
    pasarUrl(data);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

async function coleccionPerro() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function mostrarFoto(url) {
  try {
    var response = await fetch(
      "https://dog.ceo/api/breed/" + url.message + "/images/random"
    );
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function pasarUrl(url) {
  console.log(url.message);
  mostrarTitulo(url.message);

  mostrarFoto(url)
    .then(function(data) {
      document.getElementById("main").src = data.message;
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
}

function mostrarTitulo(mensaje) {
  document.getElementById("titulo").textContent = mensaje;
}

function votarSi() {
  queridos.push(document.getElementById("titulo").textContent);
  ver();
}

function votarNo() {
  noQueridos.push(document.getElementById("titulo").textContent);
  ver();
}

function ver() {
  if (acumulador == 5) {
    coleccionPerro()
      .then(function(data) {
        const div = document.getElementById("suggestions");
        const image = document.createElement("img");
        image.setAttribute("src", data.message);
        div.appendChild(image);
      })
      .catch(function(e) {
        console.error("no se encuentra el archivo json");
        console.log(e);
      });
    acumulador = 0;
    queridos = [];
    noQueridos = [];
    console.log(acumulador);
  } else {
    acumulador = queridos.length + noQueridos.length;
    console.log(acumulador);
  }
}
