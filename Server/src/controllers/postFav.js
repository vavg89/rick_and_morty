const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    // Verifica si cada parámetro es undefined y asígnale un valor predeterminado si es necesario
    const safeId = id !== undefined ? id : "unknown";
    const safeName = name !== undefined ? name : "unknown";
    const safeOrigin = origin !== undefined ? origin : "unknown";
    const safeStatus = status !== undefined ? status : "unknown";
    const safeImage = image !== undefined ? image : "unknown";
    const safeSpecies = species !== undefined ? species : "unknown";
    const safeGender = gender !== undefined ? gender : "unknown";

    await Favorite.findOrCreate({
      where: { id },
      defaults: {
        name: safeName,
        origin: safeOrigin,
        status: safeStatus,
        image: safeImage,
        species: safeSpecies,
        gender: safeGender,
      },
    });

    const favorites = await Favorite.findAll();

    res.json(favorites);
  } catch (error) {
  
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;

