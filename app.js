//Variable
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#scoreP1')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#scoreP2')
};

const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

let winningScore = parseInt(playTo.value);
let playing = true;

function playgame(player, opponent){
    if (playing){
        player.score += 1;
        if(player.score === winningScore){
            playing = false;
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function(){
    playgame(p1,p2);
});

p2.button.addEventListener('click', function(){
    playgame(p2,p1);
});

function reset(){
    playing = true;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.display.innerText = '0';
        p.button.disabled = false;
    }
}

playTo.addEventListener('change', function(){
    winningScore = parseInt(playTo.value);
    reset();
});

resetButton.addEventListener('click', reset);