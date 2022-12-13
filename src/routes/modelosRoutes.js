/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { modelos } = require("../data/inventario");
const { check } = require("express-validator");
const { postModelo } = require("../controllers/modelosController");
const { validaCampos } = require("../middleware/validaCampos");

//* Peticiones hacia los modelos
app.get("/inventario/modelos", (req, res) => {
  res.json(modelos);
});

app.get("/inventario/modelos/:id", (req, res) => {
  const id = Number(req.params.id);
  const modelo = modelos.find((modelo) => modelo.id === id);

  if (modelo) {
    res.json(modelo);
  } else {
    res.status(404).end();
  }
});

app.post(
  "/inventario/modelos",
  [
    check("sku", "SKU NO VÁlIDO").not().isEmpty(),
    check("linea", "LINEA NO VÁLIDA").not().isEmpty(),
    check("nombre", "NOMBRE NO VÁlIDO").not().isEmpty(),
    check("faccion", "MARCA NO VÁLIDA").not().isEmpty(),
    check("precio", "PRECIO NO VÁlIDO").isNumeric(),
    check("destacado", "DESTACADO NO VÁlIDO").isBoolean(),
    check("img", "IMAGEN NO VÁLIDA").not().isEmpty(),
    validaCampos,
  ],
  postModelo
);

module.exports = app;
