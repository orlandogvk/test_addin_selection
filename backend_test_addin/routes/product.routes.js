const { Router } = require("express");
const {
    getAllProducts, 
    getProductById, 
   /*  createProduct, */ 
    updateProduct, 
    deleteProduct,
    createProductByUser,
    productsByUser } = require("../controllers/product.controller.js");
const router = Router();

router.get('/products', getAllProducts);
// router.get('/products/:id', getProductById);
router.get('/productsByUser/:id', productsByUser);
/* router.post('/products', createProduct); */
router.post('/product/:userId', createProductByUser);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router