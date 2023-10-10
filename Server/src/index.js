require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const router = require('./routes');
const { conn } = require('./DB_connection');
const server = express();
const PORT = 3001 

server.use(cors())
server.use(morgan('dev'))//middlewares

server.use(express.json())

server.use('/rickandmorty', router)

conn.sync({force: true}).then(()=>{
    server.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))
}).catch((error)=>{
    console.log(error);
})


