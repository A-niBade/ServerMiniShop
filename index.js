/*
 * Creado por: Anibal
 * Fecha creación: 29-11-2022
 */
const paintRoutes = require("./src/routes/paintRoutes");
const setRoutes = require("./src/routes/setRoutes");
const tableTopRoutes = require("./src/routes/tableTopRoutes");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const PORT = 3000;
app.listen(PORT);

app.use(express.json());
app.use(morgan("dev"));

app.use(paintRoutes);
app.use(setRoutes);
app.use(tableTopRoutes);

app.get("/", (req, resp) => {
  resp.send("WENA LOS PIBES");
});

// * Enlace a mongo
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Servidor enlazado a mongo"))
  .catch((error) => console.log(error));

console.log(`Servidor en puerto ${PORT}`);
