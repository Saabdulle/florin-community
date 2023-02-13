const Token = require("../models/token");

async function auth(req, res, next) {
    try {
        const userToken = req.headers["authorization"];
        if(userToken == "null"){
            throw new Error("User not authenticated");
        } else {
            // if user has a token but not in db the below will throw error
            const validToken = await Token.getOneByToken(userToken);
            next();
        }
    } catch (err) {
        res.status(403).json({
            message: "Unable to authorize user",
            error: err.message
        })
    }
}

module.exports = auth;