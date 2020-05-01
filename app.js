class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/Audio/bgmusic.mp3')
        this.flipSound=  new Audio('assets/Audio/flip.wav');
        this.matchSound= new Audio('assets/Audio/match.wav');
        this.victorySound = new Audio('assets/Audio/victory.wav');
        this.gameOverSound = new Audio('assets/Audio/gameover.wav');
        this.bgMusic.volumn = 0.5;
        this.bgMusic.loop = true;

    }
    startMusic () {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currenTime = 0;
    }
    flip() {
        this.flipSound.play();
    } 
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.totalClicks = 0;
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
         }
    }
    canFlipCard(card) {
        return true;
    }
}

const game = new MixOrMatch(100);

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startMusic();
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            console.log(e.target);
            game.flipCard(e.target);
        })
    })

}

window.onload = () => {
    console.log('DOM loaded');
    ready();
}


