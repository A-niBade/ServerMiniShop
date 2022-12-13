/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { mesa } = require("../data/inventario");
const { check } = require("express-validator");
const { postJuegoMesa } = require("../controllers/juegosMesaController");
const { validaCampos } = require("../middleware/validaCampos");

// * Obtención de todos los juegos de mesa dentro del inventario
app.get("/inventario/juegos-de-mesa", (req, res) => {
  res.json(mesa);
});

app.get("/inventario/juegos-de-mesa/:id", (req, res) => {
  const id = Number(req.params.id);
  const mesas = mesa.find((mesas) => mesas.id === id);

  if (mesas) {
    res.json(mesas);
  } else {
    res.status(404).end();
  }
});

app.post("/inventario/juegos-de-mesa", [
  [
    check("sku", "SKU NO VÁlIDO").not().isEmpty(),
    check("linea", "LINEA NO VÁLIDA").not().isEmpty(),
    check("nombre", "NOMBRE NO VÁlIDO").not().isEmpty(),
    check("precio", "PRECIO NO VÁlIDO").isNumeric(),
    check("destacado", "DESTACADO NO VÁlIDO").isBoolean(),
    check("img", "IMAGEN NO VÁLIDA").not().isEmpty(),
    validaCampos,
  ],
  postJuegoMesa,
]);

module.exports = app;
