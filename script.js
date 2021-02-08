'use strict'

const start = confirm('Игра - угадай число от 1 до 100. Хочешь сыграть?');
let i = 10;


let gameFunction = function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1,
    userNumber = +prompt('Введите число от 1 до 100');

    function end() {
        let a = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (a === true) {
            i = 10;
            randomNumber = Math.floor(Math.random() * 100) + 1,
            gameFunction();
        } else {
            alert('Не хошь - как хошь!');
        }
    }

    function bigLow() {

        if (i === 1) {
            let b = confirm('Попытки закончились, хотите сыграть еще?');
            if (b === true) {
                i = 10;
                randomNumber = Math.floor(Math.random() * 100) + 1,
                gameFunction();
            } else {
                alert('Не хошь - как хошь!');
            }
        } else if (userNumber === 0) {
            alert('Ну покедова!');
        } else if (isNaN(userNumber)) {
            alert('Введи число!');
            userNumber = +prompt('Введите число от 1 до 100');
            bigLow();
        } else if (userNumber === randomNumber) {
            end();
        } else if (userNumber > randomNumber) {
            i--;
            alert(`Загаданное число меньше, осталось попыток ${i}`);
            userNumber = +prompt('Введите число от 1 до 100');
            bigLow();
        } else if (userNumber < randomNumber) {
            i--;
            alert(`Загаданное число больше, осталось попыток ${i}`);
            userNumber = +prompt('Введите число от 1 до 100');
            bigLow();
        }
    }

    bigLow();


    console.log(randomNumber);
    console.log(userNumber);
};

if (start === true) {
    gameFunction();
} else {
    alert('Не хошь - как хошь!');
}




