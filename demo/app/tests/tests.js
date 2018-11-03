var Fancypicker = require("nativescript-fancypicker").Fancypicker;
var fancypicker = new Fancypicker();

describe("greet function", function() {
    it("exists", function() {
        expect(fancypicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(fancypicker.greet()).toEqual("Hello, NS");
    });
});