var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Field Class ++++++++++++++++++++++++++++++++++++++
    var Field = (function (_super) {
        __extends(Field, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Field(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Field.prototype.checkBounds = function () {
            // check if field has left screen
            if (this.x == -540) {
                this.reset();
            }
        };
        Field.prototype.reset = function () {
            this.y = 0;
            this.x = 10;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Field.prototype.update = function () {
            this.x -= this.dx; // moves field across the stage
            this.checkBounds();
        };
        return Field;
    })(createjs.Bitmap);
    objects.Field = Field;
})(objects || (objects = {}));
//# sourceMappingURL=field.js.map