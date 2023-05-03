var http = require("http");
const PORT = 3001;
const getCharById = require  ("./controllers/getCharById")


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url}=req
    console.log(url);
    const urlSpliy= url.split("/")
    var id= urlSpliy[urlSpliy.length-1]
    
    console.log(id);
       /*console.log(id);
    console.log(character); 
    let findCharacter = character.find(char=> char.id === id);
    console.log(findCharacter);
    if(url.includes("/rickandmorty/character/")){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(findCharacter));
        return 
    }
    res.writeHead(404);
    res.end(`the rout is not found`);*/
    if(url.includes("/rickandmorty/character/")){
       getCharById(res, id)
    }

    

}).listen(PORT, "localhost");