const User = require("../server/models/user");
const userCon = require("../server/controllers/user");
const request = require("supertest");
const app = require("../server/app");
// const url = `http://localhost:${port}`

describe("User model tests", ()=>{
    it("should get one by ID", async ()=>{
        const response = await User.getOneById(1);
        expect(typeof response).toBe("object");
    });
    it("should get one by username", async ()=>{
        const response = await User.getOneByUsername("Martin");
        expect(typeof response).toBe("object");
    });
    it("should create a user", async ()=>{
        const newUser = {
            username: "Test",
            password: "testuser",
            email: "test@jest"
        }
        const response = await User.create(newUser);
        expect(typeof response).toBe("object");
        const isNew = await User.getOneByUsername("Test");
        expect(isNew).toBeTruthy();
    });
    it("should delete a user", async ()=>{
        const testUser = await User.getOneByUsername("Test");
        const del = await testUser.destroy();
        expect(del.command).toBe('DELETE');
        expect(del.rowCount).toBe(1);
    });
    it("should handle errors if no user is found", async ()=>{

    });
});

describe("User controller tests", ()=>{
    it("should register a user", async()=>{
        const newUser = {
            username: "Test",
            password: "testuser",
            email: "test@jest"
        }
        // const res = await request(app).post();
        // console.log(res);
    })
    it("should signin a user", async()=>{

    })
    it("should signout a user", async()=>{

    })
});

// import connect then do db.close()? or .end()?