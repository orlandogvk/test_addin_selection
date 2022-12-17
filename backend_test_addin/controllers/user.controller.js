const User = require("../models/User.js")
const { Product } = require("../models/Product.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    try {
        // Implement populate
        const users = await User.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body
        let pwdEncrypt = bcrypt.hashSync(password, 10);
        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            return res.status(400).json({ error: "User exists" })
        }
        const user = await User.create({ name, email, password: pwdEncrypt })

        res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email });
        if (!user) {
            return {
                status: res.status(400).send({ msg: "User not found" })
            }
        }
        //Access token
        const access_token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
        //Refresh token
        const refresh_token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.REFRESH_JWT_SECRET, {
            expiresIn: '1.5h'
        })
        //Cookie access_token
        res.cookie('access_token', access_token, {
            maxAge: 3600,
            httpOnly: true,
            //secure: true
        })
        user.refreshToken = refresh_token;
        user.save();
        return res.status(200).json({ msg: "User logged in", id: user._id, name: user.name, token: access_token, refresh_token })
    } catch (error) {
        return res.status(400).json("Llegue")
    }
}


const updateUser = async (req, res) => {
    try {
        console.log('Hello')
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const refreshTokens = async (refreshToken, res) => {
    if (!refreshTokens) {
        return res.status(401).json({ message: "Something is wrong" });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
        return res.status(401).json({ message: "Something is wrong" });
    }
    const new_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    return res.status(200).json({ message: "New token generated", token: new_token });
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        const deletedtedUser = await User.findByIdAndUpdate(id, {
            status: false
        },
            {
                new: true
            });
        return res.status(200).json({ InactiveUser: deletedtedUser });
    } catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    login,
    updateUser,
    deleteUser
} 