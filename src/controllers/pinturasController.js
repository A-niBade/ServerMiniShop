/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { pinturas } = require("../data/inventario");

/*
 * POSTEO DE UNA PINTURA JUNTO A SUS VALIDADORES POR SKU
 */
const postPintura = async (req, res) => {
  const nuevaPintura = {
    ...req.body,
    id: Date.now() + pinturas.length + 1,
  };

  const validarSKU = pinturas.find(
    (pintura) => pintura.sku === nuevaPintura.sku
  );

  const validarLinea = "Pinturas";

  if (
    (!validarSKU &&
      validarLinea === nuevaPintura.linea &&
      nuevaPintura.destacado === 0) ||
    nuevaPintura.destacado === 1
  ) {
    pinturas.unshift(nuevaPintura);
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
