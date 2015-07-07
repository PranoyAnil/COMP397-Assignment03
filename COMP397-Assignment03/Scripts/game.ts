/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />

/// <reference path="objects/field.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/ball.ts" />
/// <reference path="objects/enemy.ts" />


/// <reference path="objects/scoreboard.ts" />


/// <reference path="../manager/collision.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "field", src: "assets/images/field.gif" },
    { id: "player", src: "assets/images/player.png" },
    { id: "ball", src: "assets/images/ball.png" },
    { id: "opp", src: "assets/images/opp.png" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "engine", src: "assets/audio/engine.ogg" }
];


// Game Variables
var field: objects.Field;
var player: objects.Player;
var ball: objects.Ball;
var enemies: objects.Enemy[] = [];

var scoreboard: objects.ScoreBoard;

// Game Managers
var collision: managers.Collision;


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
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    field.update();
    player.update();
    ball.update();

    for (var enemy = 0; enemy < 3; enemy++) {
        enemies[enemy].update();
        collision.check(enemies[enemy]);
    }

    collision.check(ball);

    scoreboard.update();

    stage.update();

    stats.end(); // end measuring
}


// Our Main Game Function
function main() {
    //add ocean object to stage
    field = new objects.Field(assets.getResult("field"));
    stage.addChild(field);

    //add island object to stage
    ball = new objects.Ball(assets.getResult("ball"));
    stage.addChild(ball);

    // add plane object to stage
    player = new objects.Player(assets.getResult("player"));
    stage.addChild(player);

    // add 3 cloud objects to stage
    for (var enemy = 0; enemy < 3; enemy++) {
        enemies[enemy] = new objects.Enemy(assets.getResult("enemy"));
        stage.addChild(enemies[enemy]);
    }


    //add scoreboard
    scoreboard = new objects.ScoreBoard();

    //add collision manager
    collision = new managers.Collision();


}