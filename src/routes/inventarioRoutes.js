/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const express = require("express");
const app = express.Router();
const inventario = require("../data/inventario");

// * Obtención de todos los productos del inventario
app.get("/inventario", (req, res) => {
  res.json(inventario);
});

module.exports = app;
