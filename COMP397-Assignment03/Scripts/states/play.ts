module states {
    export class Play{
        
    
        //Constructor
        constructor() {
            main();
        }
        //public methods
        //update method
    public update() {
        ocean.update();
        plane.update();
        island.update();

        for (var cloud = 0; cloud < 3; cloud++) {
            clouds[cloud].update();
            collision.check(clouds[cloud]);
        }

        collision.check(island);

        scoreboard.update();
        } 
        // Our Main Method
    public main() {
        //instantiate game container
        game = new createjs.Container();
        //add ocean object to stage
        ocean = new objects.Ocean(assets.getResult("ocean"));
        game.addChild(ocean);

        //add island object to stage
        island = new objects.Island(assets.getResult("island"));
        game.addChild(island);

        // add plane object to stage
        plane = new objects.Plane(assets.getResult("plane"));
        game.addChild(plane);

        // add 3 cloud objects to stage
        for (var cloud = 0; cloud < 3; cloud++) {
            clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
            game.addChild(clouds[cloud]);
        }

    
        //add scoreboard
        scoreboard = new objects.ScoreBoard();

        //add collision manager
        collision = new managers.Collision();
    
        //add game container to stage
        stage.addChild(game);
    }

    }
} 