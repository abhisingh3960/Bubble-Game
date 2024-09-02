let hitrn = 0;
let timer = 60;
let score = 0;

// Function to generate bubbles
function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 130; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="Bubble">${rn}</div>`;
    }

    document.querySelector('#pbottom').innerHTML = clutter;
}

// Function to run the game timer
function runTimer() {
    let timerInterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector('#pbottom').innerHTML = `<h1>Game Over! Your Score: ${score}</h1>`;
        }
    }, 1000);
}

// Function to get a new random hit number
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}

// Function to increase the score
function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

// Event listener for bubble clicks
document.querySelector('#pbottom').addEventListener('click', function(event) {
    if (event.target.classList.contains('Bubble')) {
        let clickedNumber = Number(event.target.textContent);
        if (clickedNumber === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    }
});

// Initialize game
makeBubble();
runTimer();
getNewHit();
