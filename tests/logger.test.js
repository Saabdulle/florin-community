const logRoutes = require('../server/middleware/logger');

describe('logRoutes', () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = {
      method: 'GET',
      originalUrl: '/test'
    };
    mockRes = {};
    mockNext = jest.fn();
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('logs request method and URL and calls next', () => {
    logRoutes(mockReq, mockRes, mockNext);
    expect(console.log).toHaveBeenCalledWith('GET', '/test');
    expect(mockNext).toHaveBeenCalled();
  });
});
