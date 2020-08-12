const prymid = require('./pyramid');

describe('prymid', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  test('should throw error if params is string', () => {
    expect(() => {
      prymid('5');
    }).toThrowError('x needs to be a number');
  });
  
  test('should throw error if params is negative number', () => {
    expect(() => {
      prymid(-5);
    }).toThrowError('x needs to be positive');
  });
  
  test('should print prymid 1', () => {
    prymid(1);
    expect(console.log.mock.calls[0][0]).toBe('x');
    expect(console.log.mock.calls.length).toBe(1);
  });

  test('should print prymid 2', () => {
    prymid(2);
    expect(console.log.mock.calls[0][0]).toBe('x');
    expect(console.log.mock.calls[1][0]).toBe('xx');
    expect(console.log.mock.calls.length).toBe(2);
  });

  test('should print prymid 3', () => {
    prymid(3);
    expect(console.log.mock.calls[0][0]).toBe('x');
    expect(console.log.mock.calls[1][0]).toBe('xx');
    expect(console.log.mock.calls[2][0]).toBe('xxx');
    expect(console.log.mock.calls.length).toBe(3);
  });

  test('should print prymid 4', () => {
    prymid(4);
    expect(console.log.mock.calls[0][0]).toBe('x');
    expect(console.log.mock.calls[1][0]).toBe('xx');
    expect(console.log.mock.calls[2][0]).toBe('xxx');
    expect(console.log.mock.calls[3][0]).toBe('xxxx');
    expect(console.log.mock.calls.length).toBe(4);
  });

  test('should print prymid 5', () => {
    prymid(5);
    expect(console.log.mock.calls[0][0]).toBe('x');
    expect(console.log.mock.calls[1][0]).toBe('xx');
    expect(console.log.mock.calls[2][0]).toBe('xxx');
    expect(console.log.mock.calls[3][0]).toBe('xxxx');
    expect(console.log.mock.calls[4][0]).toBe('xxxxx');
    expect(console.log.mock.calls.length).toBe(5);
  });
});