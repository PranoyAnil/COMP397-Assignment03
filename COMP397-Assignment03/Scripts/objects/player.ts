module objects {
    // Player Class ++++++++++++++++++++++++++++++++++++++
    export class Player extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "engine";

            //this.x = 30;
            this.x = 770;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position player along mouse
        }
    }
} 