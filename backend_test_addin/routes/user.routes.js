const { Router } = require("express");
const {
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser,
    login } = require("../controllers/user.controller.js");
const { loginValidator } = require('../middleware/loginValidator');
const { registerValidator } = require('../middleware/registerValidator');
const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users/register', registerValidator, createUser);
router.post('/users/login', login);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router