/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */
const PinturasRoutes = require("./src/routes/pinturasRoute");
const inventarioRoutes = require("./src/routes/inventarioRoute");

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(PinturasRoutes);
app.use(inventarioRoutes);

const PORT = 3000;
app.listen(PORT);
console.log(`Servidor en puerto ${PORT}`);
