const db = require("../database/connect");

class User {
    constructor({user_id, username, password, email}){
        this.id = user_id,
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static async getOneById(id){

    }
    static async getOneByUsername(username){

    }
    static async create(data){

    }
}

module.exports = User;