const { mock } = require('jest-mock-extended');
const { getOneById } = require("../server/models/token")

const Token = require("../server/models/token")



describe("getOneById - Show", () =>{
     it("exists", async () => {
        expect(getOneById).toBeDefined();
    })
    it("is a function", async () =>{
        expect(getOneById instanceof Function).toBe(true)
    })
    let fakeResponse;
    let fakeRequest;
    beforeEach(() => {
        fakeRequest = { params: { id: 1} };
        fakeResponse = { json: jest.fn(), status: jest.fn()}
    })
    it("should return a single token id", async ()=> {
       jest.spyOn(Token, "getOneById").mockImplementation((id) => new Token ({
        token_id: -1,
        user_id: 1,
        token: "2rnor321"
       }))

       await show(fakeRequest, fakeResponse);
       expect(fakeResponse.json).toHaveBeenCalledTimes(1)
       expect(fakeResponse.json.mock.calls[0][0] instanceof Token)
       
    })
    // it("Throws error if it cannot find token", async () => {

    //     jest.spyOn(Token, "getOneById").mockImplementation((id) => { throw new error("Error")})

    //     await show(fakeRequest, fakeResponse);

    //     // res.json gets called
    //     expect(fakeResponse.json).toHaveBeenCalledTimes(1)
    //     // rest.json gets send a mushrooms
    //     expect(fakeResponse.json.mock.calls[0][0] instanceof Token)
    //     expect(fakeResponse.status).toHaveBeenCalledTimes(1);
    //     expect(fakeResponse.status).toHaveBeenCalledWith(404);
    //     expect(fakeResponse.json.mock.calls[0][0] instanceof Object);
    //     expect(fakeResponse.json.mock.calls[0][0].error).toBe(true)
    // })

   

 afterEach(() => {
        jest.resetAllMocks()
    })

 })

// describe('getOneById', () => {
//     test('returns a token for a valid ID', async () => {
//       // Mock the response of the db.query function
//       const mockQuery = jest.fn().mockResolvedValue({
//         rows: [{ token_id: 1, token_value: 'xyz' }],
//       });
  
//       // Pass the mock query function to the getOneById method
//       const result = await getOneById(1, mockQuery);
  
//       // Verify that the mock query function was called with the correct parameters
//       expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM token WHERE token_id = $1', [1]);
  
//       // Verify that the getOneById method returned the correct token object
//       expect(result).toEqual(new Token({ token_id: 1, token_value: 'xyz' }));
//     });
  
//     test('throws an error for an invalid ID', async () => {
//       // Mock the response of the db.query function to return an empty rows array
//       const mockQuery = jest.fn().mockResolvedValue({ rows: [] });
  
//       // Pass the mock query function to the getOneById method
//       await expect(getOneById(1, mockQuery)).rejects.toThrow('Unable to locate token');
  
//       // Verify that the mock query function was called with the correct parameters
//       expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM token WHERE token_id = $1', [1]);
//     });
//   });
