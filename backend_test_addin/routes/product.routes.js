const { Router } = require("express");
const {
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct } = require("../controllers/product.controller.js");
const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router