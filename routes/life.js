var express = require('express');
var router = express.Router();

/**
 * Transforms grid to the next iteration using Conway's Game of Life rules
 */
router.get('/iterate', function (req, res) {
    res.send('TODO\n').end();
});

module.exports = router;
