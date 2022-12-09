/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { mesa } = require("../data/inventario");
const { validarSKU } = require("../helpers/juegos-de-mesa/juegoMesaSKU");

/*
 * POSTEO DE UN JUEGO DE MESA
 */
const postJuegoMesa = async (req, res) => {
  const nuevoJuego = {
    ...req.body,
    id: Date.now() + mesa.length + 1,
  };

  const validarSKUMesa = validarSKU(nuevoJuego);

  if (!validarSKUMesa) {
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

module.exports = { postJuegoMesa };
