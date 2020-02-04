class vista {
    constructor(controlador){
    this.controlador = controlador;
    this.init();
    }

 pasarUrl(url) {
  mostrarFoto(url)
    .then(function(data) {
      document.getElementById("main").src = data.message;
      mostrarTitulo(url.message);
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
}

 mostrarTitulo(mensaje) {
  document.getElementById("titulo").textContent = mensaje;
}

 votarSi() {
  nombre = document.getElementById("titulo").textContent;
  confirmarPerro(nombre, 1);
}

 votarNo() {
  nombre = document.getElementById("titulo").textContent;
  confirmarPerro(nombre, 0);
}

 mostrarTop(top) {
  const ul = document.getElementById("ul");
  var il = document.createElement("il");
  var br = document.createElement("br");
  il.textContent = "nombre: " + top.nombre + " / " + " votos: " + top.voto;
  il.appendChild(br);
  ul.appendChild(il);
}


 borrar() {
  const ul = document.getElementById("ul");
  for (i = 0; i < 50; i++) {
    ul.removeChild(ul.lastChild);
  }
}

 ganador() {
  var ganador = JSON.parse(localStorage.getItem("ganador"));
  mostrarTitulo(ganador.nombre);
  mostrarGanador(ganador)
    .then(function(data) {
      console.log(data);

      document.getElementById("main").src = data.message;
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
  console.log(ganador);
}
}

export default vista