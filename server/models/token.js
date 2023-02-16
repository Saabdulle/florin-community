const {v4: uuidv4} = require("uuid");
const db = require("../database/connect");

class Token {
    constructor({token_id, user_id, token}){
        this.id = token_id;
        this.user_id = user_id;
        this.token = token;
    }
    static async getOneById(id){
        const response = await db.query("SELECT * FROM token WHERE token_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error ("Unable to locate token")
        } else {
            return new Token(response.rows[0]);
        }
    }
    static async getOneByToken(token){
        const response = await db.query("SELECT * FROM token WHERE token = $1", [token]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate token")
        } else {
            return new Token(response.rows[0]);
        }
    }
    static async create(user_id){
        const token = uuidv4();
        const q = {
            text: "INSERT INTO token (user_id, token) VALUES ($1, $2) RETURNING token_id;",
            values: [user_id, token]
        }
        const response = await db.query(q);
        const newToken = await Token.getOneById(response.rows[0].token_id);
        return newToken;

    }
    static async destroy(id){
        const response = await db.query("DELETE FROM token WHERE token_id = $1", [id]);
        localStorage.clear();
        console.log(response);
    }
}

module.exports = Token;
