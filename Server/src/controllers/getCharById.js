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
    .catch(err => res.status(500).send("Personaje no encontrado , recuerde ingresar solo numeros menores a 826"))
}


module.exports = getCharById;