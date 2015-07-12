/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/field.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/ball.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "field", src: "assets/images/football.gif" },
    { id: "player", src: "assets/images/player.png" },
    { id: "ball", src: "assets/images/ball.png" },
    { id: "cloud", src: "assets/images/opp.png" },
    { id: "yay", src: "assets/audio/ovation.ogg" },
    { id: "thunder", src: "assets/audio/whistle.ogg" },
    { id: "engine", src: "assets/audio/chant.ogg" }
];
// Game Variables
var field;
var player;
var ball;
var clouds = [];
var scoreboard;
// Game Managers
var collision;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '810px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    field.update();
    player.update();
    ball.update();
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud].update();
        collision.check(clouds[cloud]);
    }
    collision.check(ball);
    scoreboard.update();
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function main() {
    //add field object to stage
    field = new objects.Field(assets.getResult("field"));
    stage.addChild(field);
    //add ball object to stage
    ball = new objects.Ball(assets.getResult("ball"));
    stage.addChild(ball);
    // add player object to stage
    player = new objects.Player(assets.getResult("player"));
    stage.addChild(player);
    // add 3 opposition objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
}
//# sourceMappingURL=game.js.map