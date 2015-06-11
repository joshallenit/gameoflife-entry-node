var express = require('express');
var router = express.Router();

/**
 * Transforms grid to the next iteration using Conway's Game of Life rules
 */
router.get('/iterate', function (req, res) {
    var grid = JSON.parse(req.query.grid);



    res.json(grid);
});


module.export// TODO: Next Test
    it("subject - condition - expected result", function (done) {
        // Test Setup
        var grid = [
            [0,1,0],
            [0,1,0],
            [0,0,0]
        ];
        // Test Execute...

        // Test Validate...

        done();
    });s = router;
// TODO: Next Test
    it("subject - condition - expected result", function (done) {
        // Test Setup
        var grid = [
            [0,1,0],
            [0,1,0],
            [0,0,0]
        ];
        // Test Execute...

        // Test Validate...

        done();
    });