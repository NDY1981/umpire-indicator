const strikes = document.querySelector('#strikes');
const addStrike = document.querySelector('#addStrike');
const balls = document.querySelector('#balls');
const addBall = document.querySelector('#addBall');
const outs = document.querySelector('#outs');
const addOut = document.querySelector('#addOut');

let strikeCount = 0;
let ballCount = 0;
let outCount = 0;

strikes.textContent = strikeCount;
balls.textContent = ballCount;
outs.textContent = outCount;

addStrike.onclick = function() {
    if (strikeCount === 3) {
        strikeCount = 0;
    } else {
        strikeCount = strikeCount + 1;
    }
    strikes.textContent = strikeCount;
}

addBall.onclick = function() {
    if (ballCount === 4) {
        ballCount = 0;
    } else {
        ballCount = ballCount + 1;
    }
    balls.textContent = ballCount;
}

addOut.onclick = function() {
    if (outCount === 3) {
        outCount = 0;
    } else {
        outCount = outCount + 1;
    }
    outs.textContent = outCount;
}