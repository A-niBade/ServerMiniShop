/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const express = require("express");
const app = express.Router();
const { check } = require("express-validator");
const {
  postPintura,
  getPintura,
  getPinturas,
} = require("../controllers/pinturasController");
const { validaCampos } = require("../middleware/validaCampos");

// * Peticiones hacia las pinturas
app.get("/inventario/pinturas", getPinturas);

app.get("/inventario/pinturas/:id", getPintura);

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
    check("destacado", "DESTACADO NO VÁlIDO").isBoolean(),
    check("img", "IMAGEN NO VÁLIDA").not().isEmpty(),
    validaCampos,
  ],
  postPintura
);

module.exports = app;
