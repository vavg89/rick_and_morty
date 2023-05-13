let myFavorites =[];

const postFav= (req, res) => {

const character = req.body
myFavorites.push(character);
res.status(200).json(myFavorites)
}

function deleteFav (req, res) {
const {id}= req.params
const favoritosSctualizados = myFavorites.filter(character=>character.id !== Number(id))
myFavorites=favoritosSctualizados;
res.status(200).json(myFavorites)
}

module.exports= {postFav, deleteFav};