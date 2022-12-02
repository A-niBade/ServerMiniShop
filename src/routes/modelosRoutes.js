/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const inventario = require("../data/inventario");

//* Peticiones hacia los modelos
app.get("/inventario/modelos", (req, res) => {
  res.json(inventario.modelos);
});

module.exports = app;
