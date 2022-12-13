/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { validarSKU } = require("../helpers/pintura/pinturaSKU");
const pinturaModel = require("../models/pinturaModel");
const modelo = require("../models/pinturaModel");

/*
 * OBTENER TODAS LAS PINTURAS
 */
const getPinturas = async (req, res) => {
  const pinturas = await modelo.find({}).sort({ createdAt: -1 });

  res.status(200).json(pinturas);
};

/*
 * OBTENER PINTURA POR SU ID
 */
const getPintura = async (req, res) => {
  const { id } = req.params;

  const pinturas = await modelo.findById(id);

  if (!pinturas) {
    return res.status(404).json({ error: "No existe pintura" });
  }

  res.status(200).json(pinturas);
};

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

module.exports = { postPintura, getPinturas, getPintura };
