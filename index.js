require("dotenv").config();
const express = require("express");
const cors= require("cors");

const MetaData = require('./app/models/MetaDB');

const app = express();
app.use(cors())
const puerto = process.env.PORT || 8000 ;

const rutas = require("./app/routes");


app.use(express.json())
app.use("/api", rutas);

app.listen(puerto, () => {
    console.log(`Servidor listo para su uso. puerto:${puerto}`);
  });