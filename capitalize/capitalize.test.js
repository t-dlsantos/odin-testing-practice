import capitalize from "./capitalize"

describe('capitalize function', () => {
    test('capitalizes the first letter of a word', () => {
        expect(capitalize('hello')).toBe("Hello");
    }),

    test('returns an empty string when given an empty string', () => {
        expect(capitalize('')).toBe('');
    });
    
    test('does not change an already capitalized word', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
    
    test('handles strings with multiple words', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });
    
    test('handles non-string inputs gracefully', () => {
        expect(capitalize(123)).toBe('');
        expect(capitalize(null)).toBe('');
        expect(capitalize(undefined)).toBe('');
    });
    
    test('does not modify strings starting with a number', () => {
        expect(capitalize('1dab')).toBe('1dab');
    });    
})