const n = 4;  // size of world/grid
const zombieInit = [3, 1]; // intial position of zombie
const creatures= [[0, 1], [1, 2], [1, 1]]; // creatures position in the world/grid
const sequence = "RDRU"; // zombie moving sequence

const WorldClass = require("./worldClass");

const world = new WorldClass(n, zombieInit, creatures, sequence);

// world.getCurrentWOrld();
world.spreadVirus();
const finalWorld =  world.getCurrentWOrld();
console.log("zombies’ positions: ", ...finalWorld.zombies);
if(finalWorld.creatures.length > 0) {
    console.log("creatures’ positions: ", ...finalWorld.creatures);
} else {
    console.log("creatures’ positions: none");
}



