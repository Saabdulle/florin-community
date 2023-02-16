const User = require("../server/models/user");
const Token = require("../server/models/token");
const {register, login, logout} = require("../server/controllers/user");
// const request = require("supertest");
// const app = require("../server/app");
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
});

describe("User controller error handling", ()=>{
    // it("should register a user", async()=>{
    //     const newUser = {
    //         username: "Test",
    //         password: "testuser",
    //         email: "test@jest"
    //     }
    //     // const res = await request(app).post();
    //     // console.log(res);
    // })
    // it("should signin a user", async()=>{

    // })
    // it("should signout a user", async()=>{

    // })

    it("should return a 400 response when an error occurs in register", async ()=>{
        const req = {};
        const res = {
            status: jest.fn(()=>res),
            json: jest.fn()
        }
        jest.spyOn(User, "create").mockImplementation(()=>{throw err});

        await register(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    })
    it("should return a 403 response when an error occurs in login", async ()=>{
        const req = {};
        const res = {
            status: jest.fn(()=>res),
            json: jest.fn()
        }
        jest.spyOn(User, "getOneByUsername").mockImplementation(()=>{throw err});

        await login(req, res);
        expect(res.status).toHaveBeenCalledWith(403);
    })
    it("should return a 403 response when an error occurs in logout", async ()=>{
        const req = {};
        const res = {
            status: jest.fn(()=>res),
            json: jest.fn()
        }
        jest.spyOn(Token, "getOneByToken").mockImplementation(()=>{throw err});

        await logout(req, res);
        expect(res.status).toHaveBeenCalledWith(403);
    })
});

// import connect then do db.close()? or .end()?