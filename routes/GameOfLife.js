
/** Constructor */
function GameOfLife() {

}

GameOfLife.prototype.numNeighbours = function (grid, x, y) {
    return 1;
    //throw new Error("not implemented");
}

GameOfLife.prototype.iterate = function (grid) {
    return grid;
    //throw new Error("not implemented");
}

module.exports = GameOfLife;
