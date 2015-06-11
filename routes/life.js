var express = require('express');
var router = express.Router();
var GameOfLife = require('./GameOfLife');

/**
 * Transforms grid to the next iteration using Conway's Game of Life rules
 */
router.get('/iterate', function (req, res) {
    var grid = JSON.parse(req.query.grid);
    var life = new GameOfLife();
    var newGrid = life.numNeighbours(grid);
    res.json(newGrid);
});

module.exports = router;
