import ceasarCipher from './ceasarCipher';

describe('ceasarCipher function', () => {
    test('should be a function', () => {
        expect(typeof ceasarCipher).toBe('function');
    })

    test('wrapping from z to a', () => {
        expect(ceasarCipher('xyz', 3)).toBe('abc');
    })

    test('handles case preservation', () => {
        expect(ceasarCipher('HeLLo', 3)).toBe('KhOOr');
    })

    test('handles ponctuation', () => {
        expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
})