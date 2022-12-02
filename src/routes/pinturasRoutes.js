/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const express = require("express");
const app = express.Router();
const inventario = require("../data/inventario");
const { check } = require("express-validator");
const { postPintura } = require("../controllers/pinturasController");
const { validaCampos } = require("../middleware/validaCampos");

// * Peticiones hacia las pinturas
app.get("/inventario/pinturas", (req, res) => {
  res.json(inventario.pinturas);
});

app.get("/inventario/pinturas/:id", (req, res) => {
  res.json("Hola");
});

app.post(
  "/inventario/pinturas",
  [
    check("sku", "SKU NO VÁlIDO").not().isEmpty(),
    check("contenido", "CONTENIDO NO VÁlIDO").not().isEmpty(),
    check("linea", "LINEA NO VÁLIDA").not().isEmpty(),
    check("nombre", "NOMBRE NO VÁlIDO").not().isEmpty(),
    check("marca", "MARCA NO VÁLIDA").not().isEmpty(),
    check("uso", "USO NO VÁlIDO").not().isEmpty(),
    check("precio", "PRECIO NO VÁlIDO").isNumeric(),
    check("destacado", "DESTACADO NO VÁlIDO").isNumeric(),
    check("img", "IMAGEN NO VÁLIDA").not().isEmpty(),
    validaCampos,
  ],
  postPintura
);

module.exports = app;
