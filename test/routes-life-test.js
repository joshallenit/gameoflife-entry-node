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

    it("sample", function (done) {
        var grid = [[0,0,0],[0,1,0][0,0,0]];
        request(app)
            .get('/life/iterate?grid='+encodeURIComponent(util.inspect(grid)))
            .expect(200)
            .end(done);
    });

});


