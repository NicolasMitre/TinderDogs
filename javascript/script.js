var perro = [];

async function start() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/list/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function coleccionPerro() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function mostrarGanador(url) {
  try {
    var response = await fetch(
      "https://dog.ceo/api/breed/" + url.nombre + "/images/random"
    );
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

async function conseguirLista() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/list");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

conseguirLista()
  .then(function(data) {
    perro = data.message;
    objeto = [];
    for (i = 0; i < perro.length; i++) {
      var array = { nombre: perro[i], voto: 0 };
      objeto.push(array);
    }
    perro = objeto;
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

start()
  .then(function(data) {
    pasarUrl(data);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

function pasarUrl(url) {
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

function mostrarTitulo(mensaje) {
  document.getElementById("titulo").textContent = mensaje;
}

function votarSi() {
  nombre = document.getElementById("titulo").textContent;
  confirmarPerro(nombre, 1);
}

function votarNo() {
  nombre = document.getElementById("titulo").textContent;
  confirmarPerro(nombre, 0);
}

function confirmarPerro(nombre, vote) {
  ordenacion();
  for (i = 0; i < perro.length; i++) {
    if (perro[i].nombre == nombre) {
      perro[i].voto += vote;
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
}

function ordenacion() {
  perro.sort(function(a, b) {
    if (a.voto > b.voto) {
      return 1;
    }
    if (a.voto < b.voto) {
      return -1;
    }
    return 0;
  });
  for (i = 0; i < 5; i++) {
    mostrarTop(perro[perro.length - (i + 1)]);
  }
  localStorage.setItem("ganador", JSON.stringify(perro[perro.length - 1]));
}

function mostrarTop(top) {
  const ul = document.getElementById("ul");
  var il = document.createElement("il");
  var br = document.createElement("br");
  il.textContent = "nombre: " + top.nombre + " / " + " votos: " + top.voto;
  il.appendChild(br);
  ul.appendChild(il);
}
function borrar() {
  const ul = document.getElementById("ul");
  for (i = 0; i < 50; i++) {
    ul.removeChild(ul.lastChild);
  }
}
<<<<<<< HEAD
*/


function guardarLocalStorage(perro) {
  
var valor = JSON.stringify(localStorage.getItem('perros'));

console.log("sadfasdf", valor);


if (valor){  
      for(i = 0; i < valor.length; i++){
      ///  console.log(valor[i]);   
        perrosEnLS.push(valor)     
      }
      
      perrosEnLS.push(perro);
      localStorage.setItem('perros', JSON.stringify(perrosEnLS));  
} 
else
{ 
  perrosEnLS.push(perro);
  localStorage.setItem('perros', JSON.stringify(perrosEnLS));
}
}


function buscarPerroMasVotado(perrosEnLS) {
  
      var cantidad = JSON.parse(localStorage.getItem('perros'));

      var perroMasVotado;

      if (cantidad)
      {
        for (i=0; i<cantidad; i++)
        {
          if( localStorage[i].votos > localStorage[cantidad].votos)
          {
                perroMasVotado = localStorage[i];
          } 
        }
      }
      else
      {
        perroMasVotado = localStorage[cantidad];
      }
}



var probanding = localStorage.getItem('perros');
console.log(probanding);

console.log("ACA", probanding);

=======

function ganador() {
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
>>>>>>> 188a5a9c7b82f581896270046088239f1eefdfa6
