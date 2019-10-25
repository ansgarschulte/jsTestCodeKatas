const string_calc = require('./string_calc');

describe('string calc', () => {
    it('should return 0 for an empty string', () => {
        expect(string_calc.string_calc('')).toEqual(0);
    });
    it('should return the value of a single number', () => {
        expect(string_calc.string_calc('3')).toEqual(3);
    });
    it('should return the sum of several numbers', () => {
        expect(string_calc.string_calc('1,2,3')).toEqual(6);
    });
});