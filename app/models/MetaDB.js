const mongoose = require('../../config/database')

const Schema = mongoose.Schema

const MetaSchema = new Schema({
    nombre: String,
    id: String,
    fecha: String,
    imagen:String
})

const Meta = mongoose.model('metas', MetaSchema)

module.exports = Meta