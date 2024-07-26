export function findNextSquare(sq:number):number {
    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq)+1, 2) : -1;
  }