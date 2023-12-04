var PointStuff = (function () {
    function PointStuff() {
    }
    PointStuff.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    PointStuff.prototype.getDistance = function (anotherpoint) {
    };
    return PointStuff;
}());
var point = new PointStuff();
point.x = 1;
point.y = 2;
point.draw();
