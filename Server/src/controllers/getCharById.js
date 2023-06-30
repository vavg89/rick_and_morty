/*const axios = require('axios');

const URL_BASE = 'https://rickandmortyapi.com/api/character';

const fullfiled = (response, res) => {
    // console.log(response);
    const { id, name, status,species, gender, origin, image } = response.data;
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({ id, name, status,species, gender, origin, image }))
}

const rejected = (err,res) => {
    res.writeHead(500,{"Content-Type": "text/plain"})
    res.end(err.message)
}

const getCharById = (res,id) =>{
    axios.get(`${URL_BASE}/${id}`)
    .then(response => fullfiled(response, res ))
    .catch(function(err){rejected(err, res)})
}


module.exports = getCharById;*/
const axios = require('axios');

const URL_BASE = 'https://rickandmortyapi.com/api/character';

const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL_BASE}/${id}`)
    .then(({data})=>{
        const { status, name, species, origin, image, gender } = data

        const character = {id, status, name, species, origin, image, gender }

        return character.name ? res.status(200).json(character) : res.status(404).send('Not found')
    })
    .catch(err => res.status(500).send(err.message))
}


module.exports = getCharById;