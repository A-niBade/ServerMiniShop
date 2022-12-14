/*
 * Creado por: Anibal
 * Fecha creación: 05-12-2022
 */

const setsModels = require("../models/setsModels");

// * OBTENER TODOS LOS SETS
const getSets = async (req, res) => {
  try {
    const modelos = await setsModels.find({}).sort({ createdAt: -1 });
    res.status(200).json(modelos);
  } catch {
    res.status(500).json({
      error:
        "Hubo un error al listar los sets, intentelo nuevamente o contacte con un administrador",
    });
  }
};

// * OBTENER UN SET POR SU ID
const getSetByID = async (req, res) => {
  try {
    const { id } = req.params;
    const modelos = await setsModels.findById(id);
    res.status(200).json(modelos);
  } catch (error) {
    res
      .status(404)
      .json({
        error:
          "Hubo un error al buscar un set, intentelo nuevamente o contacte con un administrador",
      });
  }
};

// * POSTEO DE UN SET JUNTO
const postSet = async (req, res) => {
  try {
    const nuevoModelo = {
      ...req.body,
    };
    const modelo = new setsModels(nuevoModelo);
    await modelo.save();
    res.status(201).json({ nuevoModel: modelo });
  } catch {
    res
      .status(404)
      .json({
        Error:
          "OCURRIO UN PROBLEMA AL INGRESAR EL MODELO, VERIFIQUE LOS CAMPOS Y VUELVA A INTENTARLO",
      })
      .end();
  }
};

module.exports = { getSets, getSetByID, postSet };
