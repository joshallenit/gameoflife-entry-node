var app = require('../app');
var http = require('http');
var request = require('supertest')
var util = require('util')

var port = process.env.PORT || '3001';
app.set('port', port);

before(function(done) {
    var server = http.createServer(app);
    server.on('error', done);
    server.on('listening', done);
    server.listen(port);
});

describe("life routes", function () {

    // TODO: First Test
    it("subject - condition - expected result", function (done) {
        // Test Setup
        var grid = [
            [1,0,0],
            [0,1,0],
            [0,0,0]
        ];
        // Test Execute...

        // Test Validate...

        done();
    });

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

    // TODO: You're getting the idea
    it("subject - condition - expected result", function (done) {
        // Test Setup
        var grid = [
            [0,0,1],
            [0,1,0],
            [0,0,0]
        ];
        // Test Execute...

        // Test Validate...

        done();
    });

});
