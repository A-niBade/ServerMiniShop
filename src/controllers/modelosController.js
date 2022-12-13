/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { modelos } = require("../data/inventario");
const { validarSKU } = require("../helpers/modelo/modeloSKU");
const modeloModel = require("../models/modeloModel");

/*
 * POSTEO DE UN MODELO JUNTO A LOS VALIDADORES
 */
const postModelo = async (req, res) => {
  const nuevoModelo = {
    ...req.body,
    id: Date.now() + modelos.length + 1,
  };

  const validarSKUModelo = validarSKU(nuevoModelo);

  if (!validarSKUModelo) {
    await modeloModel.create(nuevoModelo, (err, docs) => {
      res.send({ nuevoModelo: docs });
    });
    res.send();
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
