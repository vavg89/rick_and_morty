const { User } = require('../DB_connection')

const login = async(req, res) => {
    const { email, password } = req.query;

    if(!email || !password) return res.status(400).send('Faltan Datos')

    try {
        const logUser = await User.findOne({
            where:{email}
        })

        if(!logUser) return res.status(404).json({error:"Usuario no encontrado"})

        return logUser.password === password
        ? res.status(202).json({access:true})
        : res.status(403).json({error:"Contraseña Incorrecta"})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = login;