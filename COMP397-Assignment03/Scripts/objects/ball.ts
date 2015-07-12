module objects {
    // Ball Class ++++++++++++++++++++++++++++++++++++++
    export class Ball extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "ball";
            this.sound = "yay";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ball has left screen
            if (this.x > 800 + this.width) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 540); // start ball at random location
            this.x = -this.width; // start ball off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x += this.dx; // moves ball down the stage
            this.checkBounds();
        }
    }
} 