/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */
const tableTopModel = require("../models/tableTopModel");

// * OBTENER TODOS LOS JUEGOS DE MESA
const getTableTops = async (req, res) => {
  try {
    const tableTop = await tableTopModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(tableTop);
  } catch {
    res.status(500).json({
      error:
        "Hubo un error al listar los juegos de mesa, intentelo nuevamente o contacte con un administrador",
    });
  }
};

// * OBTENER JUEGO DE MESA POR SU ID
const getTableTopByID = async (req, res) => {
  try {
    const { id } = req.params;
    const tableTop = await tableTopModel.findById(id);
    res.status(200).json(tableTop);
  } catch {
    res.status(404).json({
      error:
        "Hubo un error al buscar un set, intentelo nuevamente o contacte con un administrador",
    });
  }
};

// * POSTEO DE UN JUEGO DE MESA
const postTableTop = async (req, res) => {
  try {
    const nuevoJuego = {
      ...req.body,
    };
    const juegoMesa = new tableTopModel(nuevoJuego);
    await juegoMesa.save();
    res.status(201).json({ nuevoModel: juegoMesa });
  } catch (error) {
    res
      .status(404)
      .json({
        Error:
          "OCURRIO UN PROBLEMA AL INGRESAR LA PINTURA, VERIFIQUE LOS CAMPOS Y VUELVA A INTENTARLO",
      })
      .end();
  }
};

module.exports = { postTableTop, getTableTopByID, getTableTops };
