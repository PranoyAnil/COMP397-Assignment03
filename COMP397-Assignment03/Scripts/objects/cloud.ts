module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "cloud";
            this.sound = "foul";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if opposition has left screen
            if (this.x > 800 + this.width) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 260); // start opposition at random location
            this.y = -this.width; // start opposition off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 10) - 2;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves opposition across the stage
            this.x += this.dx; // drifts opposition right and left
            this.checkBounds();
        }
    }
}  