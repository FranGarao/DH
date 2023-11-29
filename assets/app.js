const fs = require("fs");
const uuid = require("uuid");
const path = require("path");
const ruta = path.join(__dirname, "./bicicletas.json");

const leeJson = fs.readFileSync(ruta, "utf-8");
console.log(leeJson);

const bicicletas = [
  {
    id: uuid.v4(),
    nombre: "MegaBici",
    modelo: "Regal",
    rodado: 16,
    fabricado: 2015,
    Color: "Negro",
    peso: "15kg",
    tipo: "Ruta",
    precio: 100,
    vendida: true,
  },
  {
    id: uuid.v4(),
    nombre: "MegaBici",
    modelo: "Regal",
    rodado: 16,
    fabricado: 2015,
    Color: "Negro",
    peso: "15kg",
    tipo: "Ruta",
    precio: 100,
    vendida: true,
  },
  {
    id: uuid.v4(),
    nombre: "MegaBici",
    modelo: "Regal",
    rodado: 16,
    fabricado: 2015,
    Color: "Negro",
    peso: "15kg",
    tipo: "Ruta",
    precio: 100,
    vendida: true,
  },
  {
    id: uuid.v4(),
    nombre: "MegaBici",
    modelo: "Regal",
    rodado: 16,
    fabricado: 2015,
    Color: "Negro",
    peso: "15kg",
    tipo: "Ruta",
    precio: 100,
    vendida: false,
  },
];
const bicicletasJson = JSON.stringify(bicicletas);
console.log(bicicletasJson);

fs.writeFileSync(ruta, bicicletasJson);
