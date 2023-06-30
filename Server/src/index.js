/*const http = require('http');
const data = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    const { url } = req;
    if(url.includes("/rickandmorty/character")){
        const id = url.split('/').at(-1)
        const character = data.find(char => char.id === parseInt(id))
        // console.log(character)
        if(character){
            res.writeHead(200,{"Content-Type":"application/json"})
            return res.end(JSON.stringify(character))
        }else{
            res.writeHead(404, {"Content-Type":"application/json"} )
            return res.end(JSON.stringify({error:"Character not found"}))
        }

    }
}).listen(3001,'localhost')*/

const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const router = require('./routes');

const server = express();
const PORT = 3001 

server.use(cors())
server.use(morgan('dev'))//middlewares

server.use(express.json())

server.use('/rickandmorty', router)


server.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))

