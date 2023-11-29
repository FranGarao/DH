const bicicletas = require("./bicicletas.json");
const bicisJson = JSON.stringify(bicicletas);
const datosBicis = JSON.parse(bicisJson);
console.log(datosBicis);
