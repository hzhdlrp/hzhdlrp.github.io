export  class Player {
    constructor(game) {
        this.game = game;
        this.width = this.game.width - 10;
        this.height = this.game.width - 10;
        this.sourceWidth = 2000;
        this.sourceHeight = 2000;
        this.x = 10;
        this.y = 10;
        this.images = [[move0_1, move0_2, move0_3]];
        this.weightIndex = 0;
        this.moveIndex = 0;
        this.sizeEnlarger = 0;
    }
    update() {
        this.moveIndex++;
        this.moveIndex %= 3;
        this.sizeEnlarger += 10;
        this.sizeEnlarger %= 30;

    }
    draw(context) {
        let enlarger = this.sizeEnlarger;
        // console.log(this.sizeEnlarger);

        context.drawImage(this.images[this.weightIndex][this.moveIndex], 0, 0, 
                          this.sourceWidth, this.sourceHeight, this.x - enlarger/2, this.y - enlarger/2, this.width + enlarger, 
                                                                               this.height + enlarger);
    }

}