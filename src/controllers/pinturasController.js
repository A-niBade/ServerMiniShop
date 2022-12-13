/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { pinturas } = require("../data/inventario");
const { validarSKU } = require("../helpers/pintura/pinturaSKU");
const pinturaModel = require("../models/pinturaModel");

/*
 * POSTEO DE UNA PINTURA
 */
const postPintura = async (req, res) => {
  const nuevaPintura = {
    ...req.body,
    id: Date.now() + pinturas.length + 1,
  };

  const validarSKUPintura = validarSKU(nuevaPintura);

  if (!validarSKUPintura) {
    await pinturaModel.create(nuevaPintura, (err, docs) => {
      res.send({ nuevaPintura: docs });
    });
  } else {
    res
      .status(404)
      .json({
        Error:
          "OCURRIO UN PROBLEMA AL INGRESAR LA PINTURA, VERIFIQUE LOS CAMPOS Y VUELVA A INTENTARLO",
      })
      .end();
  }
};

module.exports = { postPintura };
