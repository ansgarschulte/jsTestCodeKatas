import {MarsRover, Position} from './mars_rover';

describe('mars rover', () => {
    it('should position be setted with init', () => {
        const marsRover = new MarsRover();
        const setPositionSpy = jest.spyOn(marsRover, 'setPosition');
        marsRover.init(0,0,'N');
        expect(setPositionSpy).toBeCalledTimes(1);
        expect(setPositionSpy).toBeCalledWith(0,0,'N');
    });

    it('should move forward', () => {
        const marsRover = new MarsRover();
        const spyPos = jest.spyOn(Position.prototype, 'forward');
        marsRover.init(0,0,'N');
        marsRover.move('F');
        expect(spyPos).toBeCalledTimes(1);
        expect(marsRover.getPosition()).toEqual({x: 1, y: 0, direction: 'N'});
    });

    // it('should move backwards', () => {
    //     const marsRover = new MarsRover();
    //     jest.mock
    //     const spyPos = jest.spyOn(Position.prototype, 'backward');
    //     marsRover.init(0,0,'N');
    //     marsRover.move('F');
    //     expect(spyPos).toBeCalledTimes(1);
    //     expect(marsRover.getPosition()).toEqual({x: 1, y: 0, direction: 'N'});
    // });

});