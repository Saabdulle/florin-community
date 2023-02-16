const { mock } = require('jest-mock-extended');
const { getOneById, getOneByToken, create, destroy } = require("../server/models/token")

const Token = require("../server/models/token")

describe("getOneById", () =>{
    it("exists", async () => {
        expect(getOneById).toBeDefined();
    })
    it("is a function", async () =>{
        expect(getOneById instanceof Function).toBe(true)
    })
            
})

describe("getOneByToken", () =>{
    it("exists", async () => {
        expect(getOneByToken).toBeDefined();
    })
    it("is a function", async () =>{
        expect(getOneByToken instanceof Function).toBe(true)
    })
            
})


describe("create", () =>{
    it("exists", async () => {
        expect(create).toBeDefined();
    })
    it("is a function", async () =>{
        expect(create instanceof Function).toBe(true)
    })
            
})

describe("destroy", () =>{
    it("exists", async () => {
        expect(destroy).toBeDefined();
    })
    it("is a function", async () =>{
        expect(destroy instanceof Function).toBe(true)
    })
            
})






// describe("getOneById - show", () =>{
//     let fakeResponse;
//     let fakeRequest;
//     beforeEach(() => {
//         fakeRequest = { params: { id: 1} };
//         fakeResponse = { json: jest.fn(), status: jest.fn()}
//     })

//      it("exists", async () => {
//         expect(getOneById).toBeDefined();
//     })
//     it("is a function", async () =>{
//         expect(getOneById instanceof Function).toBe(true)
//     })
    
    
//     it("should return a single token id", async ()=> {
//        jest.spyOn(Token, "getOneById").mockImplementation((id) => new Token ({
//         token_id: -1,
//         user_id: 1,
//         token: "2rnor321"
//        }));

//         jest.spyOn(Token, "getOneById").mockImplementation((id) => new Token({
//             token_id: -1,
//             user_id: 1,
//             token: "dupe"
//         }))

//        await show(fakeRequest, fakeResponse);
//        expect(fakeResponse.json).toHaveBeenCalledTimes(1);
//        expect(fakeResponse.json.mock.calls[0][0] instanceof Token).toBe(true);
       
//     })
//     it("Throws error if it cannot find token", async () => {

//         jest.spyOn(Token, "getOneById").mockImplementation((id) => { throw new error("Error")})

//         await show(fakeRequest, fakeResponse);

//         expect(fakeResponse.json).toHaveBeenCalledTimes(1)
//         expect(fakeResponse.json.mock.calls[0][0] instanceof Token)
       
//     })

   

//  afterEach(() => {
//         jest.resetAllMocks()
//     })

// //  })
