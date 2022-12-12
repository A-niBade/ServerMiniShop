/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */
const PinturasRoutes = require("./src/routes/pinturasRoutes");
const inventarioRoutes = require("./src/routes/inventarioRoutes");
const modelosRoutes = require("./src/routes/modelosRoutes");
const juegosMesaRoutes = require("./src/routes/juegosMesaRoutes");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const PORT = 3000;
app.listen(PORT);

app.use(express.json());
app.use(morgan("dev"));

app.use(PinturasRoutes);
app.use(inventarioRoutes);
app.use(modelosRoutes);
app.use(juegosMesaRoutes);

/*
 * Enlace a mongo
 */
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Servidor enlazado a mongo"))
  .catch((error) => console.log(error));

console.log(`Servidor en puerto ${PORT}`);
