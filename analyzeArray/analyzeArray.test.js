import analyzeArray from './analyzeArray'

describe('analyzeArray function', () => {
    const object = analyzeArray([1,8,3,4,2,6]);

    test('should be a function', () => {
        expect(typeof analyzeArray).toBe('function');
    });

    test('returns an object with the determined properties', () => {
        expect(object).toHaveProperty('average');
        expect(object).toHaveProperty('min');
        expect(object).toHaveProperty('max');
        expect(object).toHaveProperty('length');
    });

    test('return the correct value for each property', () => {
        expect(object.average).toBe(4);
        expect(object.min).toBe(1);
        // expect(object.max).toBe(8);
        // expect(object.length).toBe(6);
    })
})