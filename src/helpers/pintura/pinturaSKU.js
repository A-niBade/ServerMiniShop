/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { pinturas } = require("../../data/inventario");

const validarSKU = (nuevaPintura) => {
  const validarSKUPintura = pinturas.some(
    (pintura) => pintura.sku === nuevaPintura.sku
  );
  return validarSKUPintura;
};

module.exports = { validarSKU };
