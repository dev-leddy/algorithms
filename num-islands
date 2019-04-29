/* Leetcode 200. Number of Islands
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

var numIslands = function(grid) {
    let islands = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                islands++;
                dfs(grid, i, j);
            }
        }
    }
    return islands;
};

function dfs(grid, row, col){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] != 1) return; 
    
    grid[row][col] = '#';
    dfs(grid,row+1,col);
    dfs(grid,row,col-1);
    dfs(grid,row,col+1);
    dfs(grid,row-1,col);
}
