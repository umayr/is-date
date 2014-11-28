var assert = require('assert');
var isDate = require('..');

describe('index', function() {
    it('should take less than 500ms', function(done) {
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('should return false when provided value isn\'t a date', function() {
        var invalid = [
            'some string', 'stringwith1234', '1234', 1234, 12.34
        ];

        invalid.forEach(function(value) {
            assert.strictEqual(isDate(value), false);
        });

    });
    it('should return true when provided value is a date', function() {
        var valid = [
            '11/28/2014','28/11/2014','11/28/14','11-28-2014','28-11-2014','11-28-14'
        ];

        valid.forEach(function(value) {
            assert.strictEqual(isDate(value), true);
        });

    });
});
