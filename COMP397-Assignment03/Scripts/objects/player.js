var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Player Class ++++++++++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Player(imageString) {
            _super.call(this, imageString);
            this.sound = "chant";
            //this.x = 30;
            this.x = 770;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Player.prototype.update = function () {
            this.y = stage.mouseY; // position player along mouse
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map