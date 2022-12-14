/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { check } = require("express-validator");
const {
  postTableTop,
  getTableTopByID,
  getTableTops,
} = require("../controllers/tableTopController");
const { validateFields } = require("../middleware/validateFields");

// * OBTENCION DE TODOS LOS JUEGOS DE MESA
app.get("/inventario/juegos-de-mesa", getTableTops);

// * OBTENCION DE UN JUEGO DE MESA POR ID
app.get("/inventario/juegos-de-mesa/:id", getTableTopByID);

app.post("/inventario/juegos-de-mesa", [
  [
    check("sku", "SKU NO VÁlIDO").not().isEmpty(),
    check("linea", "LINEA NO VÁLIDA").not().isEmpty(),
    check("nombre", "NOMBRE NO VÁlIDO").not().isEmpty(),
    check("precio", "PRECIO NO VÁlIDO").isNumeric(),
    check("destacado", "DESTACADO NO VÁlIDO").isBoolean(),
    check("img", "URL DE IMAGEN NO VÁLIDA").not().isEmpty(),
    validateFields,
  ],
  postTableTop,
]);

module.exports = app;
