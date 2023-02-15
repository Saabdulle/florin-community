const Token = require("../server/models/token")
const { getOneById } = require("../server/models/token")


describe("getOneById", () =>{
    it("exists", () => {
        expect(getOneById).toBeDefined();
    })
    it("is a function", () =>{
        expect(getOneById instanceof Function).toBe(true)
    })


})
