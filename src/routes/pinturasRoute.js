/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const express = require("express");
const app = express.Router();
const inventario = require("../data/inventario");
const { check } = require("express-validator");
const { postPintura } = require("../controllers/pinturasController");
const { validateFields } = require("../middleware/validate-fields");

// * Peticiones hacia las pinturas
app.get("/inventario/pinturas", (req, res) => {
  res.json(inventario.pinturas);
});

app.get("/inventario/pinturas/:id", (req, res) => {
  res.send("Hola jj");
});

app.post(
  "/inventario/pinturas",
  [
    check("sku", "formato no válido").not().isEmpty(),
    check("contenido", "formato no válido").not().isEmpty(),
    check("linea", "formato no válido").not().isEmpty(),
    check("nombre", "formato no válido").not().isEmpty(),
    check("marca", "formato no válido").not().isEmpty(),
    check("uso", "formato no válido").not().isEmpty(),
    check("precio", "formato no válido").isNumeric(),
    check("destacado", "formato no válido").isNumeric(),
    check("img", "formato no válido").not().isEmpty(),
    validateFields,
  ],
  postPintura
);

module.exports = app;
