/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const paintModel = require("../models/paintModel");

// * OBTENER TODAS LAS PINTURAS
const getPaint = async (req, res) => {
  try {
    const paint = await paintModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(paint);
  } catch {
    res.status(500).json({
      error:
        "Hubo un error al listar las pinturas, intentelo nuevamente o contacte con un administrador",
    });
  }
};

// * OBTENER PINTURA POR SU ID
const getPaintByID = async (req, res) => {
  try {
    const { id } = req.params;
    const paint = await paintModel.findById(id);
    if (!paint) {
      return res.status(404).json({ error: "No existe pintura" });
    }
    res.status(200).json(paint);
  } catch (error) {
    res.status(500).json({
      error:
        "Hubo un error al buscar la pintura, intentelo nuevamente o contacte con un administrador",
    });
  }
};

// * POSTEO DE UNA PINTURA
const postPaint = async (req, res) => {
  try {
    const newPaint = {
      ...req.body,
    };
    const paint = new paintModel(newPaint);
    await paint.save();
    res.status(201).json({ newPaint: paint });
  } catch {
    res
      .status(404)
      .json({
        Error:
          "OCURRIO UN PROBLEMA AL INGRESAR LA PINTURA, VERIFIQUE LOS CAMPOS Y VUELVA A INTENTARLO",
      })
      .end();
  }
};

module.exports = { getPaint, getPaintByID, postPaint };
