/*
 * Creado por: Anibal
 * Fecha creación: 9-12-2022
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinturaSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  linea: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  uso: {
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

module.exports = mongoose.model("pinturas", pinturaSchema);
