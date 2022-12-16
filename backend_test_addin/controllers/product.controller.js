
const getAllProducts = async (req, res) => {
    try {
        return res.status(200).json({msg: 'Hello products'})
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const getProductById = async (req, res) => {
    try {
        return res.status(200).json({msg: 'Hello a product'})
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const createProduct = async (req, res) => {
    try {
        return res.status(200).json({msg: 'Hello new product'})
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const updateProduct = async (req, res) => {
    try {
        return res.status(200).json({msg: 'Hello update product'})
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        return res.status(200).json({msg: 'Hello delete a product'})
    } catch (error) {
        return res.status(400).json({ error })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} 