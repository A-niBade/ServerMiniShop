/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { modelos } = require("../../data/inventario");

const validarSKU = (nuevoModelo) => {
  const validarSKUModelo = modelos.some(
    (modelo) => modelo.sku === nuevoModelo.sku
  );
  return validarSKUModelo;
};

module.exports = { validarSKU };
