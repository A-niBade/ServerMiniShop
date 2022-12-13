/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const { validarSKU } = require("../helpers/juegos-de-mesa/juegoMesaSKU");
const juegosMesaModel = require("../models/juegosMesaModel");
const modelo = require("../models/juegosMesaModel");

// * OBTENER TODOS LOS JUEGOS DE MESA
const getJuegos = async (req, res) => {
  const juegos = await modelo.find({}).sort({ createdAt: -1 });

  res.status(200).json(juegos);
};

// * OBTENER JUEGO DE MESA POR SU ID
const getJuego = async (req, res) => {
  const { id } = req.params;

  const juego = await modelo.findById(id);

  if (!juego) {
    return res.status(404).json({ error: "No existe pintura" });
  }

  res.status(200).json(juego);
};

// * POSTEO DE UN JUEGO DE MESA
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

module.exports = { postJuegoMesa, getJuego, getJuegos };
