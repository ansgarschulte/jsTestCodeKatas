export class Position {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    forward() {
        switch (this.direction) {
            case 'N':
                this.x++;
                break;
            case 'S':
                this.x--;
                break;
            case 'W':
                this.y--;
                break;
            case 'E':
                this.y++;
                break;
        }
    }

    backward() {
        switch (this.direction) {
            case 'N':
                this.y++;
                break;
            case 'S':
                this.y--;
                break;
            case 'W':
                this.x--;
                break;
            case 'E':
                this.x++;
                break;
        }
    }
}

export class MarsRover {
    constructor() {
        this.position = new Position(0, 0, 'N');
    }

    init(x, y, direction) {
        this.setPosition(x, y, direction);
    }

    setPosition(x, y, direction) {
        this.position.x = x;
        this.position.y = y;
        this.position.direction = direction;
    }

    move(commands) {
        [...commands].forEach(c => {
            switch (c) {
                case 'F':
                    this.position.forward()
            }
        });
    }

    getPosition() {
        return this.position;
    }
}