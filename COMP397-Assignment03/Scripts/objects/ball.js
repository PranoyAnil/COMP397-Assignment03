var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ball Class ++++++++++++++++++++++++++++++++++++++
    var Ball = (function (_super) {
        __extends(Ball, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Ball(imageString) {
            _super.call(this, imageString);
            this.name = "ball";
            this.sound = "yay";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Ball.prototype.checkBounds = function () {
            // check if ball has left screen
            if (this.x > 800 + this.width) {
                this.reset();
            }
        };
        Ball.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 540); // start ball at random location
            this.x = -this.width; // start ball off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Ball.prototype.update = function () {
            this.x += this.dx; // moves ball down the stage
            this.checkBounds();
        };
        return Ball;
    })(objects.GameObject);
    objects.Ball = Ball;
})(objects || (objects = {}));
//# sourceMappingURL=ball.js.map