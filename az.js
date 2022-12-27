let msg1 = document.querySelector('.msg1');
let msg2 = document.querySelector('.msg2')
let msg3 = document.querySelector('.msg3')
let div = document.getElementById('game')

let chance = 10;

let guessed_num = [];

let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

msg2.textContent = 'Number of chance to guess : ' + chance;

function play() {

    let guess_num = Number(document.getElementById('guess_num').value)

    if (guess_num < 1 || guess_num > 50) {
        alert('Please enter number between 1 to 50')
    } else {
        if (guess_num > answer) {

            div.classList.add('wrong')

            msg1.textContent = 'Your number is too high';

            chance -= 1;

            msg2.textContent = 'Number of chance to guess : ' + chance;

            guessed_num.push(guess_num);

            msg3.textContent = 'Guessed numbers are:' + guessed_num;

            document.getElementById('guess_num').value = ''

        } else if (guess_num === answer) {
            div.classList.remove('wrong')
            div.classList.add('true')

            msg1.textContent = 'Congraulations.You won'

            document.querySelector('.btn-guess').disabled = true;

        } else {

            div.classList.add('wrong')

            msg1.textContent = 'Your number is too low'

            chance -= 1;

            msg2.textContent = 'Number of chance to guess : ' + chance;

            guessed_num.push(guess_num)

            msg3.textContent = 'Guessed numbers are:' + guessed_num;

            document.getElementById('guess_num').value = ''
        }
        // CHANCE CHECK
        if (chance <= 0) {
            document.querySelector('.btn-guess').disabled = true;

            alert('Your chance is empty.Please restart the game :3')

            restart()
        }

    }
}

function restart() {
    document.querySelector('.btn-guess').disabled = false;

    document.getElementById('guess_num').value = '';

    div.classList.remove('wrong');

    div.classList.remove('true');

    msg1.textContent = 'Your game is successfully restarted.'

    chance = 10

    msg2.textContent = 'Number of chances to guess:' + chance

    guessed_num = []

    msg3.textContent = 'Guessed numbers are' + guessed_num

    answer = Math.floor(Math.random() * 50) + 1

    console.log(answer);
}