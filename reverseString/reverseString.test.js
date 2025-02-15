import reverseString from "./reverseString"

describe('reverseString function', () => {
    test('should be a function', () => {
        expect(typeof reverseString === 'function').toBe(true)
    })

    test('reverse the characters of a word', () => {
        expect(reverseString('Potato')).toBe('otatoP');
    })

    test('handles strings with multiple words', () => {
        expect(reverseString('I want to go to the supermaket')).toBe('tekamrepus eht ot og ot tnaw I')
    })
    
    test('handles non-string inputs gracefully', () => {
        expect(reverseString(123)).toBe('');
        expect(reverseString(null)).toBe('');
        expect(reverseString(undefined)).toBe('');
    });
})