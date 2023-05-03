const axios = require("axios");


const getCharById = (res, id)=>{
axios
.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((response)=>{
    const character = {
       name:response.data.name,
       gender:response.data.gender,
       species:response.data.species,
       origin:response.data.origin,
       image:response.data.image,
       status:response.data.status
    }
    res
    .writeHead(200,{"Content-Type": "application/json"})
    .end (JSON.stringify(character))
 })
 .catch((error)=>{
    console.log("hay un error ", error.message);
    res
    .writeHead(500,{"Content-Type": "text/plain"})
    .end(error.message) 
})
}

module.exports = getCharById
    

