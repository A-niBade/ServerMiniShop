/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const { pinturas } = require("../data/inventario");

const postPintura = async (req, res) => {
  const nuevaPintura = {
    ...req.body,
    id: Date.now() + pinturas.length + 1,
  };

  const validarID = pinturas.find(
    (pintura) => pintura.sku === nuevaPintura.sku
  );

  if (!validarID) {
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
