import string_calc2 from './string_calc2';

describe('string calc', () => {
    it('should return 0 for an empty string', () => {
        expect(string_calc2('')).toEqual(0);
    });
    it('should return the value of a single number', () => {
        expect(string_calc2('3')).toEqual(3);
    });
    it('should return the sum of several numbers', () => {
        expect(string_calc2('1,2,3')).toEqual(6);
    });
    it('should throe exception for negativ numbers', () => {
        expect(() => {
            string_calc2('-1')
        }).toThrow(new Error('negative not allowed'));
        //thunk
        expect(() => {
            string_calc2('-1,1,3')
        }).toThrow(new Error('negative not allowed'));
        //thunk
    });
});