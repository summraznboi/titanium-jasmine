// I don't like this at all, but it beats having to call
// 'jasmine.it()' or 'jasmine.expect()' all the freaking time.
var j = require('spec/lib/jasmine-1.2.0');
var methods = ['spyOn',
               'it',
               'xit',
               'expect',
               'runs',
               'waits',
               'waitsFor',
               'beforeEach',
               'afterEach',
               'describe',
               'xdescribe'
               ];

for (var i = 0, l = methods.length; i < l;  i++) {
    var method = methods[i];
    this[method] = j[method];
    Ti.API.debug('require ' + method);
}

exports.run = function() {
    describe('spec sample', function() {
        it('is undefined.', function() {
            var x;
            expect(x).toBeDefined();
        });
    });
};

