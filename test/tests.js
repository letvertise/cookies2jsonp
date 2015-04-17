var should = require('should');
var assert = require('assert');
var request = require('supertest');
var cookieParser = require('cookie-parser');

describe('Events', function () {
    var url = 'http://localhost:3000';


    before(function (done) {
        done();
    });

    describe('Testing cookies2jsonp', function () {

        it('should make a get request sending a cookie with two key-pair-values and get back a jsonp foo({ username: "nacho", hobby: "tennis" })', function (done) {
            request(url)
                .get('/c2j?callback=foo&random=' + Math.floor(Math.random() * 1E5) + '.' + new Date().getTime())
                .set('Cookie', 'username=nacho; hobby=tennis')
                .expect('Content-Type', 'text/javascript; charset=utf-8')
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }

                    res.text.should.containEql("foo({\"username\":\"nacho\",\"hobby\":\"tennis\"})")
                    done();
                });
        });

        it('should make a get request sending a cookie with a single and get back a jsonp foo({ "username": "nacho" })', function (done) {
            request(url)
                .get('/c2j?callback=foo&random=' + Math.floor(Math.random() * 1E5) + '.' + new Date().getTime())
                .set('Cookie', 'username=nacho')
                .expect('Content-Type', 'text/javascript; charset=utf-8')
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }

                    res.text.should.containEql("{\"username\":\"nacho\"}")
                    done();
                });
        });

        it('should make a get request sending no cookies and get back a jsonp foo({})', function (done) {
            request(url)
                .get('/c2j?callback=foo&random=' + Math.floor(Math.random() * 1E5) + '.' + new Date().getTime())
                .expect('Content-Type', 'text/javascript; charset=utf-8')
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }

                    res.text.should.containEql("foo({})")
                    done();
                });
        });

    });
}); 
