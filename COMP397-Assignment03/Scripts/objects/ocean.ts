module objects {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    export class Ocean extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ocean has left screen
            if (this.x == -540) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 0;
            //this.y = -960; // reset ocean off screen
            this.x = 180;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            //this.y += this.dy; // moves Ocean down the stage
            this.x -= this.dx;
            this.checkBounds();
        }
    }
}  