
const registerValidator = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(401).json({ error: "All fields are required" });
        }
        // Email validation
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!validEmail.test(email)) {
            return res.status(401).json({ msg: "Email wrong" });
        }
        // Password validation
        if (password.length < 8) {
            return res.status(401).json({
                status: false,
                msg: "Please enter at least 8 characters",
            });
        }
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "error middleware"});
    }
}

module.exports = { registerValidator };