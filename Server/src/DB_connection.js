require('dotenv').config();
const { Sequelize } = require('sequelize');
//const { format } = require('sequelize/types/utils');
const { DB_USER, DB_PASSWORD, DB_HOST, D_B } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User');
//const users = require('./utils/users');
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${D_B}`,
   { logging: false, native: false }
);



// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
FavoriteModel(sequelize);
UserModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
   User,
   Favorite,
   //o una manera simplificada a la anterior usando  S operator ...sequalize,models,
   conn: sequelize,
};
