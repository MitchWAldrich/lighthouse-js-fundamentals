const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  let position = [0, 0];
  for (const grid of moves) {
    if (grid === "north") {
      position[1] += 1;
    }
    else if (grid === "south") {
      position[1] -= 1;
    }
    else if (grid === "west") {
      position[0] -= 1;
    }
    else if (grid === "east") {
      position[0] += 1;
    }
  }
  return position;
}


console.log(finalPosition(moves));