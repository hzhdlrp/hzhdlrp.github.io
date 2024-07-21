export class Energy {
    constructor(canvas) {
        this.canvas = canvas;
        this.sourceWidth = 360;
        this.sourceHeight = 360;
        this.width = 50;
        this.height = 50;
        this.image = shaker;
        this.x = 10;
        this.y = 10;
    }

    draw(context, text) {

        context.drawImage(this.image, 0, 0, 
                          this.sourceWidth, this.sourceHeight, this.x, this.y, this.width, this.height);
        context.font = '20px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillText(text, this.width + 30, this.height/2);
    }

}