import calculator from "./calculator"

describe('calculator object', () => {
    test('should be and object', () => {
        expect(typeof calculator).toBe('object')
    })

    test('performs basic calculations', () => {
        expect(calculator.add(-1, 2)).toBe(1);
        expect(calculator.subtract(3, 2)).toBe(1);
        expect(calculator.divide(4, 2)).toBe(2);
        expect(calculator.multiply(0, 2)).toBe(0);
    })

    test('handles division by 0', () => {
        expect(calculator.divide(2, 0)).toBe('Division by 0 not allowed');
    })

    test('handles non-number inputs gracefully', () => {
        expect(calculator.add('a', 'b')).toBe('Input must be numeric values only');
        expect(calculator.subtract('a', 'b')).toBe('Input must be numeric values only');
        expect(calculator.divide('a', 'b')).toBe('Input must be numeric values only');
        expect(calculator.multiply('a', 'b')).toBe('Input must be numeric values only');
    })
})