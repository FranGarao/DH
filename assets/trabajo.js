const bicicletas = require("./bicicletas.json");

const buscarBiciPorId = (id) => {
  bicicletas.forEach((bici) => {
    if (id === bici.id) {
      return `Bicicleta encontrada!\n ${bici}`;
    } else {
      return `No se encontro una bicicleta con el id indicado.`;
    }
  });
};

console.log(buscarBiciPorId("f2e2f144-295a-433d-a92f-1790c60e11ea"));
