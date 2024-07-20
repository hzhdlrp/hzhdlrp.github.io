export  class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.sourceWidth = 2000;
        this.sourceHeight = 2000;
        this.x = 0;
        this.y = 0;
        this.images = [[move0_1, move0_2, move0_3]];
        this.weightIndex = 0;
        this.moveIndex = 0;
    }
    update() {
        this.moveIndex++;
        this.moveIndex %= 3;
    }
    draw(context) {
        context.drawImage(this.images[this.weightIndex][this.moveIndex], 0, 0, this.sourceWidth, this.sourceHeight, this.x, this.y, this.game.width, this.game.height);
    }
}