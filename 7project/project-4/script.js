let randomnum=parseInt(Math.random()*100+1);

const submit=document.querySelector(`#subt`);
const userInput=document.querySelector(`#guessField`);
const guessSlot=document.querySelector(`.guesses`);
const remainig=document.querySelector(`.lastResult`);
const lowOrHi=document.querySelector(`.lowOrHi`);
const startover=document.querySelector(`.resultParas`);

const p=document.createElement(`p`);

let preguess =[];
let  numguess = 1;

let playgame=true;

if (playgame){
    submit.addEventListener(`click`,function(e){
        e.preventDefault();
        const guess = Number(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert(` please enter a valid number`)
    }else if(guess<1){
        alert(` please enter a number more than 1`)
    }else if(guess>100){
        alert(` please enter a number less than 100`)
    }else {
        preguess.push(guess)
        if(numguess===11){
            getDisplayGuess(guess)
            displaymsg(` Game over. random number was ${randomnum}`)
            endGame()
        }else{
            getDisplayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if (guess===randomnum){
        displaymsg(` you guess right`)
        endGame()
    }else if (guess<randomnum){
        displaymsg(` number is too low`)
    }else if (guess > randomnum){
        displaymsg(` number is too high`)
    }
}
function getDisplayGuess(guess){
    userInput.value=``;
    guessSlot.innerHTML += `${guess}, `;
    numguess++;
    remainig.innerHTML=`${11-numguess}`;
}
function displaymsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(guess){
    userInput.value=``;
    userInput.setAttribute(`disabled`,``);
    p.classList.add(`button`);
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector(`#newGame`)
    newGameButton.addEventListener(`click`,function(e){
        randomnum = parseInt(Math.random() * 100 + 1);
        preguess=[];
        numguess=1;
        guessSlot.innerHTML=``;
        remainig.innerHTML=`${11-numguess}`;
        userInput.removeAttribute(`disabled`)
        startover.removeChild(p)

        playgame=true;
    })
}