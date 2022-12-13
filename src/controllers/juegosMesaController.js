/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { validarSKU } = require("../helpers/juegos-de-mesa/juegoMesaSKU");
const juegosMesaModel = require("../models/juegosMesaModel");

/*
 * POSTEO DE UN JUEGO DE MESA
 */
const postJuegoMesa = async (req, res) => {
  const nuevoJuego = {
    ...req.body,
  };

  const validarSKUMesa = validarSKU(nuevoJuego);

  if (!validarSKUMesa) {
    const juegoMesa = new juegosMesaModel(nuevoJuego);
    await juegoMesa.save();
    res.status(201).json({ nuevoModel: juegoMesa });
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

module.exports = { postJuegoMesa };
