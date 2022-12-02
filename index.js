/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */
const PinturasRoutes = require("./src/routes/pinturasRoutes");
const inventarioRoutes = require("./src/routes/inventarioRoutes");
const modelosRoutes = require("./src/routes/modelosRoutes");
const juegosMesaRoutes = require("./src/routes/juegosMesaRoutes");

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(PinturasRoutes);
app.use(inventarioRoutes);
app.use(modelosRoutes);
app.use(juegosMesaRoutes);

const PORT = 3000;
app.listen(PORT);
console.log(`Servidor en puerto ${PORT}`);
