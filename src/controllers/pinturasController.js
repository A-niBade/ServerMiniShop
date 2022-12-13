/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { validarSKU } = require("../helpers/pintura/pinturaSKU");
const pinturaModel = require("../models/pinturaModel");

/*
 * POSTEO DE UNA PINTURA
 */
const postPintura = async (req, res) => {
  const nuevaPintura = {
    ...req.body,
  };

  const validarSKUPintura = validarSKU(nuevaPintura);

  if (!validarSKUPintura) {
    const pintura = new pinturaModel(nuevaPintura);
    await pintura.save();
    res.status(201).json({ nuevoModel: pintura });
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
