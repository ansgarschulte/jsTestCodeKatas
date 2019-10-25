const {fizzBuzz} = require('./fizzBuzz');

describe('fizz buzz game', () => {
    it('should return a passed number', () => {
        expect(fizzBuzz(1)).toEqual(1);
        expect(fizzBuzz(2)).toEqual(2);
        expect(fizzBuzz(4)).toEqual(4);
    });
    it('should return fizz', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
    });
    it('should return buzz', () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
    });
    it('should return fizz buzz', () => {
        expect(fizzBuzz(15)).toEqual('Fizz Buzz');
    });
    it('should return undefined for not a number', () => {
        expect(fizzBuzz('A')).toEqual(undefined);
    });
});