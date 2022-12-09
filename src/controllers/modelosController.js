/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { modelos } = require("../data/inventario");
const { validarSKU } = require("../helpers/modelo/modeloSKU");

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
    modelos.unshift(nuevoModelo);
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
