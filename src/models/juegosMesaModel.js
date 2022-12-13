/*
 * Creado por: Anibal
 * Fecha creación: 13-12-2022
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const juegosMesaModel = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  linea: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  destacado: {
    type: Boolean,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("juegosMesa", juegosMesaModel);
