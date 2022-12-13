/*
 * Creado por: Anibal
 * Fecha creación: 30-11-2022
 */

const express = require("express");
const app = express.Router();
const { mesa } = require("../data/inventario");
const { check } = require("express-validator");
const {
  postJuegoMesa,
  getJuegos,
  getJuego,
} = require("../controllers/juegosMesaController");
const { validaCampos } = require("../middleware/validaCampos");

// * OBTENCION DE TODOS LOS JUEGOS DE MESA
app.get("/inventario/juegos-de-mesa", getJuegos);

// * OBTENCION DE UN JUEGO DE MESA POR ID
app.get("/inventario/juegos-de-mesa/:id", getJuego);

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
