const User = require("../models/User.js")
const Product = require("../models/Product.js")

const getAllProducts = async (req, res) => {
    try {
        const productFound = await Client.find()
        return res.status(200).json({ msg: 'Hello products' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const getProductById = async (req, res) => {
    try {
        return res.status(200).json({ msg: 'Hello a product' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

/* const createProduct = async (req, res) => {
    try {
        return res.status(200).json({ msg: 'Hello new product' })
    } catch (error) {
        return res.status(400).json({ error })
    }
} */

const createProductByUser = async (req, res) => {
    try {
        const { userId } = req.params
        const { title, description, price } = req.body
        const user = await User.findOne({ _id: userId })
        if (!userId) {
            return res.status(400).json({ msg: 'Missing userId' })
        }
        const product = await Product.create({ title, description, price, userId })
        const userUpdate = await User.findByIdAndUpdate(user, { products: [...user.products, product] })
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const productsByUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ _id: id })
        res.status(201).json(user.products)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        return res.status(200).json({ msg: 'Hello update product' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        return res.status(200).json({ msg: 'Hello delete a product' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    /*  createProduct, */
    createProductByUser,
    productsByUser,
    updateProduct,
    deleteProduct
} 