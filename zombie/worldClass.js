const Queue = require("./queue");
const constants = require("./constants");

class World {
    constructor(n, zombieInit, livings, moves) {
        this.n = n;
        this.world = [];
        this.moves = moves;
        this.infectedQueue = new Queue();
        this.infectedQueue.enqueue(zombieInit);
        this._initWorld(zombieInit, livings);
    }

    addZombies = (newZombies) => {
        if (newZombies && newZombies.length > 0) {
            this.zombies = this.zombies.concat(newZombies)
        }
    }

    getCurrentWOrld = () => {
        const zombies = [];
        const creatures = []
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                if(this.world[i][j] === 3){
                    zombies.push([i, j])
                } else if(this.world[i][j] === 1){
                    creatures.push([i, j])
                }
            }
        }
        return {zombies, creatures};
    }

    spreadVirus = () => {
        while (!this.infectedQueue.isEmpty) {
            let [x, y] = this.infectedQueue.dequeue();
            if(this.world[x][y] !== constants.ZOMBIE_END){
                this.world[x][y] = constants.EMPTY;
            }
            for (let move of this.moves) {
                if (move === "R") {
                    [x, y] = this._getRight(x, y);
                }
                if (move === "L") {
                    [x, y] = this._getLeft(x, y);
                }
                if (move === "U") {
                    [x, y] = this._getUp(x, y);
                }
                if (move === "D") {
                    [x, y] = this._getDown(x, y);
                }

                if (this.world[x][y] === constants.CREATURE) {
                    this.world[x][y] = constants.ZOMBIE_START;
                    this.infectedQueue.enqueue([x, y]);
                    console.log(`zombie ${this.infectedQueue.currentZombieLevel} infected creature at (${x},${y}).`);
                } else {
                    console.log(`zombie ${this.infectedQueue.currentZombieLevel} moved to (${x},${y}).`);
                }
            }
            this.world[x][y] = constants.ZOMBIE_END;
        }
    }

    _initWorld = (zombie, livings) => {
        this.world[zombie[0]] = [];
        this.world[zombie[0]][zombie[1]] = constants.ZOMBIE_START;
        livings.forEach(living => {
            if (!this.world[living[0]]) {
                this.world[living[0]] = [];
            }
            this.world[living[0]][living[1]] = constants.CREATURE;
        });

        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.n; j++) {
                if (!this.world[i]) {
                    this.world[i] = [];
                    this.world[i][j] = constants.EMPTY;
                } else if (!this.world[i][j]) {
                    this.world[i][j] = constants.EMPTY;
                }
            }
        }
    }

    _getRight = (x, y) => {
        x = x + 1;
        if (x > (this.n - 1)) x = 0;
        return [x, y];
    }

    _getLeft = (x, y) => {
        x = x - 1;
        if (x < 0) x = this.n - 1;
        return [x, y];
    }

    _getDown = (x, y) => {
        y = y + 1;
        if (y > (this.n - 1)) y = 0;
        return [x, y];
    }

    _getUp = (x, y) => {
        y = y - 1;
        if (y < 0) y = this.n - 1;
        return [x, y];
    }

}

module.exports = World;