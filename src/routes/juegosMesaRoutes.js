/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const inventario = require("../data/inventario");

// * Obtención de todos los juegos de mesa dentro del inventario
app.get("/inventario/juegos-de-mesa", (req, res) => {
  res.json(inventario.mesa);
});

module.exports = app;
