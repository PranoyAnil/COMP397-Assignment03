var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
            this.displayover = new createjs.Text();
            this.displayscore = new createjs.Text();
            this.livesLabel = new createjs.Text("Lives:", "40px Comic Sans MS", "#00FFCC");
            this.scoreLabel = new createjs.Text("Score:", "40px Comic Sans MS", "#00FFCC");
            this.scoreLabel.x = 350;
            stage.addChild(this.livesLabel);
            stage.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
            //check lives to end game
            if (scoreboard.lives == 0) {
                //display game over
                stage.removeChild(scoreboard.livesLabel);
                stage.removeChild(scoreboard.scoreLabel);
                stage.removeChild(ball);
                this.displayover = new createjs.Text("GAME OVER", "40px Comic Sans MS", "#00FFCC");
                this.displayover.x = 280;
                this.displayover.y = 180;
                stage.addChild(this.displayover);
                this.displayscore = new createjs.Text("SCORE:" + scoreboard.score, "40px Comic Sans MS", "#FFFFFF");
                this.displayscore.x = 290;
                this.displayscore.y = 280;
                stage.addChild(this.displayscore);
            }
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map