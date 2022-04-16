const express = require('express');
const Meta = require('../models/MetaDB');
const {getMeta} = require('../controller/MetaDataC')


const rutas = express.Router()


rutas.get('/:id',  getMeta)


module.exports = rutas