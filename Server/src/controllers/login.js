const users = require('../utils/users')

const getLogin = (req, res) => {
    const { email, password } = req.query;

    let access = false;

    const autorizado = users.find(user => user.email === email && user.password === password) 

    autorizado ? access = true : access = false

    return res.status(200).json({access})
}


module.exports = getLogin;