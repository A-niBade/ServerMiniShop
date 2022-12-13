/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { validarSKU } = require("../helpers/modelo/modeloSKU");
const modeloModel = require("../models/modeloModel");
const modelo = require("../models/modeloModel");

/*
 * OBTENER TODOS LOS MODELOS
 */
const getModelos = async (req, res) => {
  const modelos = await modelo.find({}).sort({ createdAt: -1 });

  res.status(200).json(modelos);
};

/*
 * OBTENER PINTURA POR SU ID
 */
const getModelo = async (req, res) => {
  const { id } = req.params;

  const modelos = await modelo.findById(id);

  if (!modelos) {
    return res.status(404).json({ error: "No existe pintura" });
  }

  res.status(200).json(modelos);
};

/*
 * POSTEO DE UN MODELO JUNTO A LOS VALIDADORES
 */
const postModelo = async (req, res) => {
  const nuevoModelo = {
    ...req.body,
  };

  const validarSKUModelo = validarSKU(nuevoModelo);

  if (!validarSKUModelo) {
    const modelo = new modeloModel(nuevoModelo);
    await modelo.save();
    res.status(201).json({ nuevoModel: modelo });
  } else {
    res
      .status(404)
      .json({
        Error:
          "OCURRIO UN PROBLEMA AL INGRESAR EL MODELO, VERIFIQUE LOS CAMPOS Y VUELVA A INTENTARLO",
      })
      .end();
  }
};

module.exports = { postModelo, getModelo, getModelos };
