/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

var wallsAndGates = function (rooms) {
  var GATE = 0;
  var ROOM = Math.pow(2, 31) - 1;
  var DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  var m = rooms.length;
  if (m == 0) return;
  var n = rooms[0].length;
  var gStart = [];
  rooms.forEach(row => {
    row.forEach(col => {
      if (col === GATE) {
        gStart.push([row, col]);
      }
    })
  })

  while (gStart.length) {
    const [row, col] = gStart.splice(0, 1);
    DIRECTIONS.forEach(dir => {
      var r = row + dir[0];
      var c = col + dir[1];
      if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != ROOM) {
        return;
      }
      rooms[r][c] = rooms[row][col] + 1;
      gStart.push([r, c]);
    })
  }
};
