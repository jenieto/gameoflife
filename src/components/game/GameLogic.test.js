import {
  isCellActive,
  numberOfNeighbors } from './GameLogic';

const width = 3;
const height = 3;
const activeCells = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 }
];

describe('isCellActive', () => {
  it('out of bounds cell is not active', () => {
    const neighbors = isCellActive(activeCells, -1, 1);
    expect(neighbors).toBe(false);
  });
  it('cell (0,1) is not active', () => {
    const neighbors = isCellActive(activeCells, 0, 1);
    expect(neighbors).toBe(false);
  });
  it('cell (0,0) is active', () => {
    const neighbors = isCellActive(activeCells, 0, 0);
    expect(neighbors).toBe(true);
  });
  it('cell (2,2) is active', () => {
    const neighbors = isCellActive(activeCells, 2, 2);
    expect(neighbors).toBe(true);
  });
});

describe('numberOfNeighbors', () => {
  it('cell (0,0) has 1 neighbor', () => {
    const neighbors = numberOfNeighbors(activeCells, 0, 0);
    expect(neighbors).toBe(1);
  });
  it('cell (0,1) has 1 neighbor', () => {
    const neighbors = numberOfNeighbors(activeCells, 0, 1);
    expect(neighbors).toBe(2);
  });
});