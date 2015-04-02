var express = require('express');
var router = express.Router();

/**
 * Transforms grid to the next iteration using Conway's Game of Life rules
 */
router.get('/iterate', function (req, res) {
    var grid = JSON.parse(req.query.grid);
    res.json(grid);
});

module.exports = router;
