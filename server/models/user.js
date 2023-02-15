const db = require("../database/connect");

class User {
    constructor({user_id, username, password, email}){
        this.id = user_id,
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static async getOneById(id){
        let response = await db.query("SELECT * FROM user_account WHERE user_id = $1;", [id]);
        // Add error handling
        return new User(response.rows[0]);
    }
    static async getOneByUsername(username){
        let response = await db.query("SELECT * FROM user_account WHERE username = $1;", [username]);
        // Add error handling
        return new User(response.rows[0]);
    }
    static async create(data){
        let q = {
            text: "INSERT INTO user_account (username, password, email) VALUES ($1, $2, $3) RETURNING user_id;",
            values: [data.username, data.password, data.email]
        }
        let response = await db.query(q);
        const newUser = await User.getOneById(response.rows[0].user_id)
        return newUser;
    }
    async destroy(){
        let q = {
            text: "DELETE FROM user_account WHERE user_id = $1",
            values: [this.id]
        }
        let response = await db.query(q);
        return response;
    }
}

module.exports = User;