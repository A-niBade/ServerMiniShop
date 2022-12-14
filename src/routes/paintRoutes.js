/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */

const express = require("express");
const app = express.Router();
const { check } = require("express-validator");
const {
  postPaint,
  getPaint,
  getPaintByID,
} = require("../controllers/paintController");
const { validateFields } = require("../middleware/validateFields");

// * Peticiones hacia las pinturas
app.get("/inventario/pinturas", getPaint);

app.get("/inventario/pinturas/:id", getPaintByID);

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
    check("img", "URL DE IMAGEN NO VÁLIDA").not().isEmpty(),
    validateFields,
  ],
  postPaint
);

module.exports = app;
