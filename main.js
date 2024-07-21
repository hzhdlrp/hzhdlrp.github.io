import { Player } from './player.js';
import { Money } from './money.js';
import { Energy } from './energy.js';

let progress = {
    score: 0,
    energy: 100
}

function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify(progress));
    console.log('Progress saved');
}

function loadProgress() {
    const savedProgress = localStorage.getItem('gameProgress');
    if (savedProgress) {
        progress = JSON.parse(savedProgress);
        console.log('Progress loaded', progress);
    } else {
        console.log('No saved progress found');
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let animate;
const ANIMATION_DELAY = 30;

window.addEventListener('load', function() {
    loadProgress();
    
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    canvas2.width = canvas.width;
    canvas2.height = canvas.offsetTop - canvas.height/2 - 5;

    const canvas3 = document.getElementById('canvas3');
    const ctx3 = canvas3.getContext('2d');
    canvas3.width = canvas.width;
    canvas3.height = canvas2.height - 10;
    canvas3.style.marginTop = `${canvas.height + canvas2.height + 10}px`;


    const userTap = document.getElementById("userTap");
    userTap.width = canvas.width;
    userTap.height = canvas.height;


    class Game {
        constructor() {
            this.player = new Player(canvas);
            this.money = new Money(canvas2);
            this.energy = new Energy(canvas3);
        }
        update() {
            this.player.update();
            this.money.update();
        }
        draw() {
            this.money.draw(ctx2, progress.score);
            this.player.draw(ctx);
            this.energy.draw(ctx3, progress.energy);
        }
    }

    const game = new Game();
    console.log(game);
    game.draw();

    animate = async function() {
        for (let i = 0; i < 2; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            game.update();
            game.draw();
        
            await delay(ANIMATION_DELAY);
        }
        await delay(ANIMATION_DELAY - 10);
        for (let i = 0; i < 2; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            game.update();
            game.update();
            game.draw();
        
            await delay(ANIMATION_DELAY);
        }
        
    }

    setInterval(() => {
        if (progress.energy < 100) {
            progress.energy++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            game.draw();
            saveProgress();
        } else {
            progress.energy = 100;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            game.draw();
            saveProgress();
        }
    }, 1000);
    
   

});

window.buttonClicked = function buttonClicked() {
    if (progress.energy > 2) {
        progress.score++;
        progress.energy-=3;
        saveProgress();
        console.log('tap');
        animate();
    }
}

