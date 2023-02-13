const bcrypt = require("bcrypt");

async function register (req, res) {
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
        const hashedPass = await bcrypt.hash(data.password, salt);
        data.password = hashedPass;
        const result = await User.create(data);

        res.status(201).send(data)
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            error: true,
            message:"Unable to register\n" + err.message
        })
    }
}

async function login (req, res) {
    
}