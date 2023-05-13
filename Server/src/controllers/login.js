const data = require("../utils/users.js");


const login = (req , res )=>{
const {email,password}= req.query;
console.log(email,password);
const emailVerification = data.find(dat => dat.email === email);
const passworsdVerification = data.find(dat=>dat.password === password)
if(!emailVerification||!passworsdVerification)return res.status(200).json({"access":"false"})
res.status(200).json({"access":"true"})
} 


module.exports = {login}