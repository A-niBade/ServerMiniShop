/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { check } = require("express-validator");
const {
  postSet,
  getSets,
  getSetByID,
} = require("../controllers/setsController");
const { validateFields } = require("../middleware/validateFields");

//* Peticiones hacia los modelos
app.get("/inventario/modelos", getSets);

app.get("/inventario/modelos/:id", getSetByID);

app.post(
  "/inventario/modelos",
  [
    check("sku", "SKU NO VÁlIDO").not().isEmpty(),
    check("linea", "LINEA NO VÁLIDA").not().isEmpty(),
    check("nombre", "NOMBRE NO VÁlIDO").not().isEmpty(),
    check("faccion", "MARCA NO VÁLIDA").not().isEmpty(),
    check("precio", "PRECIO NO VÁlIDO").isNumeric(),
    check("destacado", "DESTACADO NO VÁlIDO").isBoolean(),
    check("img", "URL DE IMAGEN NO VÁLIDA").not().isEmpty(),
    validateFields,
  ],
  postSet
);

module.exports = app;
