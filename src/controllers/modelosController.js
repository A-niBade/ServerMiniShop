/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { validarSKU } = require("../helpers/modelo/modeloSKU");
const modeloModel = require("../models/modeloModel");

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

module.exports = { postModelo };
