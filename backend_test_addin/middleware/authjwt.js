const User = require('../models/User');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        //Headers object witho token
        const token = req.headers["x-access-token"] || req.query.access_token || req.headers["authorization"] || req.cookies.access_token;
        //We verify if token is asigned
        if (!token) {
            return res.status(403).json({ message: "Don't exist a token" });
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
            //// We verify if token is valid & User is logged in
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id, { password: 0 });
            req.userId = decoded.id;
            if (!user) return res.status(404).json({ message: "User not found" });
            next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized", error });
    }
}

module.exports = {
    verifyToken
};