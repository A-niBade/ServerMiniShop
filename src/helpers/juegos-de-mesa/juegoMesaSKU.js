/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { mesa } = require("../../data/inventario");

const validarSKU = (nuevoMesa) => {
  const validarSKUMesa = mesa.some((mesa) => mesa.sku === nuevoMesa.sku);
  return validarSKUMesa;
};

module.exports = { validarSKU };
