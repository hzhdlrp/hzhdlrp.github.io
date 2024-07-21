export class Money {
    constructor(canvas) {
        this.canvas = canvas;
        this.sourceWidth = 7339;
        this.sourceHeight = 8000;
        this.width = 50;
        this.height = 50;
        this.image = money;
        this.x = 10;
        this.y = 10;
        this.sizeEnlarger = 0;
    }
    update() {
        this.sizeEnlarger += 5;
        this.sizeEnlarger %= 15;
    }

    draw(context) {
        let enlarger = this.sizeEnlarger;
        // console.log(this.sizeEnlarger);

        context.drawImage(this.image, 0, 0, 
                          this.sourceWidth, this.sourceHeight, this.x - enlarger/2, this.y - enlarger/2, this.width + enlarger, 
                                                                               this.height + enlarger);
    }

}