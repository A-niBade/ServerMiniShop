/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { pinturas } = require("../data/inventario");
const { validarSKU } = require("../helpers/pintura/pinturaSKU");

/*
 * POSTEO DE UNA PINTURA JUNTO A SUS VALIDADORES POR SKU
 */
const postPintura = async (req, res) => {
  const nuevaPintura = {
    ...req.body,
    id: Date.now() + pinturas.length + 1,
  };

  const validarSKUPintura = validarSKU(nuevaPintura);

  if (!validarSKUPintura) {
    pinturas.push(nuevaPintura);
    res.send();
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
