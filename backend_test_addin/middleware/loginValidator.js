const User = require("../models/User.js")
const bcrypt = require('bcryptjs');

const loginValidator = async (req, res, next) => {
    // Email validation 
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(req.body.email)) {
        return res.status(401).json({error: "Email is invalid"});
    }
    // Verify user exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).send({ token: null, message: "User not found" })
    }
    //Compare passeord
    const matchPassword = await bcrypt.compareSync(req.body.password, user.password)
    if (!matchPassword) {
        return res.status(404).send({ token: null, message: "Password don't match" })
    }
    next();
}

module.exports = { loginValidator };