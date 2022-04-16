const express=require('express');
const rutas =express.Router();
const {httpError}= require('../helpers/handleError')
const MetaDataDB =require('../models/MetaDB')


const getMetas = (req, res)=> {
    
}

const getMeta = async (req, res)=> {
    try{
        let idtoken = req.params.id
        
    
    
      const Meta = await MetaDataDB.findOne({id:idtoken})



      const MetaData = {
        'name':Meta.nombre,
        'atributes':{
        'id':Meta.id,
        'date':Meta.fecha
    }
        ,

      'image': Meta.imagen
  }
    
      res.send(MetaData)
    
    
      

    }
    catch(e){
        httpError(res, e)
}
}

const createMeta = async (req, res)=> {

}

const updateMeta = async(req, res)=> {

}


const deleteMeta= (req, res)=> {
    
}

module.exports={getMeta}