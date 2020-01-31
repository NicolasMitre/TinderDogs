// DECLARACION DE VARIABLES.

var perrosEnLS = [];

var perro = { nombre:"", votos:0 };


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
  perro.nombre = document.getElementById("titulo").textContent;
  perro.votos += 1;
  guardarLocalStorage(perro);
}


function votarNo() {
  perro.nombre = document.getElementById("titulo").textContent;
  perro.votos += 0;
  guardarLocalStorage(perro);
}
/*
function guardarLocalStorage(perro) {
  var ver = localStorage.getItem('perros');
  if(ver)
 {
  ver = JSON.parse(ver)
  console.log(ver);
  
  perrosEnLS.push(ver);
  localStorage.setItem('perros', JSON.stringify(perrosEnLS));
 }
 else {
  perrosEnLS.push(perro);
  localStorage.setItem('perros', JSON.stringify(perrosEnLS));
 }
}
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

