async function readJson() {
  try {
    var response = await fetch("https://dog.ceo/api/breeds/list/all");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

var cuentas;
readJson()
  .then(function(data) {
    cuentas = data;
    console.log(cuentas);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });
