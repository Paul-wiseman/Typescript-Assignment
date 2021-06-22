"use strict";
var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld("Hello TypeScript");
console.log(hello.message);
function sayHello(name) {
    console.log("Hello " + name + "!");
}
sayHello('Dave');
