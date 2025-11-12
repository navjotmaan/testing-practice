const { capitalize, reverseString, calculator } = require('./main');

describe('capitalize', () => {
    test('capitalize the first character', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    test('returns empty string for empty input', () => {
        expect(capitalize('')).toBe('');
    });

    test('returns same string if already capitalize', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('capitalize single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('does not change non-alphabetic first character', () => {
        expect(capitalize('123abc')).toBe('123abc');
    });
});

describe('reverseString', () => {
    test('reverse the string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
});

describe('calculator', () => {
    test('add a and b', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtract b from a', () => {
        expect(calculator.subtract(2, 3)).toBe(-1);
    });

    test('divide a by b', () => {
        expect(calculator.divide(12, 4)).toBe(3);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error when inputs are not numbers', () => {
        expect(() => calculator.divide('a', 2)).toThrow('Inputs must be numbers');
    });

    test('multiply a with b', () => {
        expect(calculator.multiply(5, 7)).toBe(35);
    });
});