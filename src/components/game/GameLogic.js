export const isCellActive = (activeCells, x, y) =>
  activeCells.some((cell) => cell.x == x && cell.y == y);

export const numberOfNeighbors = (activeCells, x, y) => {
  let activeNeighbors = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if ((i !== x || j !== y) && isCellActive(activeCells, i, j)) {
        activeNeighbors++;
      }
    }    
  }
  return activeNeighbors;
};

export const CalculateNextActiveCells = (activeCells, width, height) => {
  const nextActiveCells = [];
  for (let row = 0; row < width; row++) {
    for (let column = 0; column < height; column++) {
      const alifeNeighbors = numberOfNeighbors(activeCells, row, column);
      const isAlife = isCellActive(activeCells, row, column);

      if (alifeNeighbors == 3 || (isAlife && alifeNeighbors == 2)) {
        nextActiveCells.push({
          x: row,
          y: column
        });
      }
    }
  }
  return nextActiveCells;
};