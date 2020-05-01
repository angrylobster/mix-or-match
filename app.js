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
    }
    // startMusic() {
    //     this.audioController.startMusic();
    // }
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

    // shuffleCards() {
    //     // for(let i = this.cardsArray.length -1; i =0; 1--) {

    //     }
    // }

    canFlipCard(card) {
        return true;
        //return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startMusic();
            game.startGame();
        });
    });

    for (const card of cards) {
        console.log(game)
        card.addEventListener('click', () => {
            console.log(game)
            game.flipcard(card);
        });

        }
      
    // cards.forEach(card => {
    //     const gameInstance = game
    //     card.addEventListener('click', () => {
    //         gameInstance.flipcard(card);
            
    //     });
    // });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else  {
    ready();
}

//let AudioController = new AudioController(); 


