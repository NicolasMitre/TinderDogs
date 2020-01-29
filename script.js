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

async function borzoi() {
  try {
    var response = await fetch(
      "https://dog.ceo/api/breed/borzoi/images/random"
    );
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

var cuentaBorzoi;
borzoi()
  .then(function(data) {
    cuentaBorzoi = data;
    console.log(cuentaBorzoi);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

async function cairn() {
  try {
    var response = await fetch("https://dog.ceo/api/breed/cairn/images/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

var cuentaCairn;
cairn()
  .then(function(data) {
    cuentaCairn = data;
    console.log(cuentaCairn);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

async function shiba() {
  try {
    var response = await fetch("https://dog.ceo/api/breed/shiba/images/random");
    var data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

var cuentaShiba;
shiba()
  .then(function(data) {
    cuentaShiba = data;
    console.log(cuentaShiba);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

async function vizsla() {
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

var cuentaVizsla;
vizsla()
  .then(function(data) {
    cuentaVizsla = data;
    console.log(cuentaVizsla);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

function (params) {
  
}