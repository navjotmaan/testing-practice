const { capitalize, reverseString } = require('./main');

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