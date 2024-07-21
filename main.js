import { Player } from './player.js'

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    const canvas2 = this.document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    canvas2.width = canvas.width;
    canvas2.height = canvas.offsetTop - canvas.height/2 - 5;
    // canvas2.y = 0;


    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update() {
            this.player.update();
        }
        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(ctx);
        game.update();
        requestAnimationFrame(animate);
    }
    animate();

    function buttonClicked() {

    }


});