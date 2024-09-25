const express = require("express");
const { signup, login, checkAuth } = require("../controllers/authControllers");
const verifyToken = require("../middlewares/verifyToken");
const { getUsers } = require("../controllers/userControllers");
const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get('/checkAuth',verifyToken,checkAuth )


// user router
router.get('/getUsers',getUsers)




module.exports = router;