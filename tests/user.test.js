const User = require("../server/models/user");
const userCon = require("../server/controllers/user");
// const request = require("supertest");
// const { port } = require("../server/app");
// const url = `http://localhost:${port}`

describe("User model tests", ()=>{
    it("should get one by ID", async ()=>{
        const response = await User.getOneById(1);
        console.log(response);
        expect(typeof response).toBe("object");
    });
    it("should get one by username", async ()=>{
        const response = await User.getOneByUsername("Martin");
        expect(typeof response).toBe("object");
    });
    it("should create a user", async ()=>{
        
    });
    it("should handle errors if no user is found", async ()=>{

    });
});

describe("User controller tests", ()=>{

});