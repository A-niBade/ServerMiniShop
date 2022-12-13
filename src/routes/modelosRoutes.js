/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { check } = require("express-validator");
const {
  postModelo,
  getModelos,
  getModelo,
} = require("../controllers/modelosController");
const { validaCampos } = require("../middleware/validaCampos");

//* Peticiones hacia los modelos
app.get("/inventario/modelos", getModelos);

app.get("/inventario/modelos/:id", getModelo);

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
