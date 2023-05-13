const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById (req,res){
   const {id} = req.params
  axios
  .get(`${URL}${id}`)
  .then((response)=>{
const {name,image,gender,species,status,origin} = response.data
const character = {name,image,gender,species,status,origin}
character.name
? res.status(200).json(character)
: res.status(404).send("Not fount")
  })
  .catch((error)=>{
   res.status(500).json({message: error.message})
  })
};



module.exports = {getCharById};


