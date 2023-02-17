const bcrypt = require("bcrypt");
const Token = require("../models/token");
const User = require("../models/user");

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
    try {
        const data = req.body;

        const user = await User.getOneByUsername(data.username);
        
        const authenticated = await bcrypt.compare(data.password, user.password);
        
        if(authenticated){
            
            const token = await Token.create(user.id);

            res.status(200).json({
                authenticated: true,
                token: token.token
            });
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (err) {
        console.log("controller", err.message);
        res.status(403).json({
            error: true,
            message: err.message
        })
    }
}

async function logout(req, res) {
    try {
        const userToken = req.headers["authorization"];
        if(userToken == "null"){
            throw new Error("User not logged in");
        } else {
            const token = await Token.getOneByToken(userToken);
            Token.destroy(token.id);
        }
    } catch (err) {
        res.status(403).json({
            message: "Unable to logout",
            error: err.message
        })
    }
}

module.exports = {register, login, logout};
