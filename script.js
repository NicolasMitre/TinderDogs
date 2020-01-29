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
function pasarUrl(url) {
  console.log(url.message);
  mostrarTitulo(url.message);
  async function mostrarFoto() {
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
  mostrarFoto()
    .then(function(data) {
      document.getElementById("main").src = data.message;
      ///local storage. perro actual, hacer funcion.
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
}
function mostrarTitulo(mensaje) {
  document.getElementById("perrito").textContent = mensaje;
}


function setearLocalStorage(data) {
  perro = data;

  localStorage.setItem('perro', data);
  
  console.log("dsfsdfd", perro)

}




/// para clickear en los botones:::
addEventListener

