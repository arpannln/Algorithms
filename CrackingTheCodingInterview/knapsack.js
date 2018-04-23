//lol this problem

// two arrays, and capacity are your inputs
// value array -> [15, 25, 35], weight array [5, 10, 15], capacity = 125



function countMoves(b, j, c, moves) {
   if (b[j[0]+1][j[1]+1] === 'X' && b[j[0]+2][j[1]+2] === '.' ) {
     c ++;
     countMoves(b, [j[0]+2,j[1]+2], c, moves);
   }
   else if (b[j[0]+1][j[1]-1] === 'X' && b[j[0]+2][j[1]-2] === '.')  {
     c ++;
     countMoves(b, [j[0]+2,j[1]-2], c, moves);
   }
   else {
     moves.push(c);
   }
}
