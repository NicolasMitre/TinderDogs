// async function readJson() {
//   try {
//     var response = await fetch("https://dog.ceo/api/breeds/list/all");
//     var data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// readJson()
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(e) {
//     console.error("no se encuentra el archivo json");
//     console.log(e);
//   });

async function showImage() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

showImage()
  .then(function(data) {
    mostrar(data);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });
async function mostrarFoto() {
  try {
    var response = await fetch(
      "https://dog.ceo/api/breed/vizsla/images/random"
    );
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

mostrarFoto()
  .then(function(data) {
    mostrarFoto = data;
    console.log(mostrarFoto);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

function mostrar(data) {
  var imagen = (document.getElementById("main").src = data.message);
  console.log(imagen, data.message);
}
