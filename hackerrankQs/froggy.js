// Alef the Frog is in an  two-dimensional maze represented as a table. The maze has the following characteristics:
//
// Each cell can be free or can contain an obstacle, an exit, or a mine.
// Any two cells in the table considered adjacent if they share a side.
// The maze is surrounded by a solid wall made of obstacles.
// Some pairs of free cells are connected by a bidirectional tunnel.
// image
//
// When Alef is in any cell, he can randomly and with equal probability choose to move into one of the adjacent cells that don't contain an obstacle in it. If this cell contains a mine, the mine explodes and Alef dies. If this cell contains an exit, then Alef escapes the maze.
//
// When Alef lands on a cell with an entrance to a tunnel, he is immediately transported through the tunnel and is thrown into the cell at the other end of the tunnel. Thereafter, he won't fall again, and will now randomly move to one of the adjacent cells again. (He could possibly fall in the same tunnel later.)
//
// It's possible for Alef to get stuck in the maze in the case when the cell in which he was thrown into from a tunnel is surrounded by obstacles on all sides.
//
// Your task is to write a program which calculates and prints a probability that Alef escapes the maze.
//
// Input Format
//
// The first line contains three space-separated integers ,  and  denoting the dimensions of the maze and the number of bidirectional tunnels.
//
// The next  lines describe the maze. The 'th line contains a string of length  denoting the 'th row of the maze. The meaning of each character is as follows:
//
// # denotes an obstacle.
// A denotes a free cell where Alef is initially in.
// * denotes a cell with a mine.
// % denotes a cell with an exit.
// O denotes a free cell (which may contain an entrance to a tunnel).
// The next  lines describe the tunnels. The 'th line contains four space-separated integers , , , . Here,  and denote the coordinates of both entrances of the tunnel.  denotes the row and column number, respectively.
//
