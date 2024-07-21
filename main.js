import { Player } from './player.js'

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let animate;
const ANIMATION_DELAY = 30;

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    canvas2.width = canvas.width;
    canvas2.height = canvas.offsetTop - canvas.height/2 - 5;

    const userTap = document.getElementById("userTap");
    userTap.width = canvas.width;
    userTap.height = canvas.height;


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
    game.draw(ctx);

    animate = async function() {
        for (let i = 0; i < 2; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update();
            game.draw(ctx);
        
            await delay(ANIMATION_DELAY);
        }
        await delay(ANIMATION_DELAY - 10);
        for (let i = 0; i < 2; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update();
            game.update();
            game.draw(ctx);
        
            await delay(ANIMATION_DELAY);
        }
        
    }
    
   

});

window.buttonClicked = function buttonClicked() {
    console.log('tap');
    animate();
}