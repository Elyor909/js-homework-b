function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min )
}

let number = +prompt('Введите количество примеров');

for(let i = 0; i < number; i++) {
    let a = rand(1, 10);
    let b = rand(1, 10);
    let c = rand(1, 4);

    if(c == 1) {
        let primer = +prompt(a + ' + ' + b + ' = ? ' );
        console.log(primer == (a + b) ? 'Ваш ответ правильный ' + primer : 'Ваш ответ не правильный ' + primer  + '! Правильный ответ ' + (a + b));
    } else if(c == 2) {
        let primer = +prompt(a + ' - ' + b + ' = ? ' );
        console.log(primer == (a - b) ? 'Ваш ответ правильный ' + primer : 'Ваш ответ не правильный ' + primer  + '! Правильный ответ ' + (a - b));
    } else if(c == 3) {
        let primer = +prompt(a + ' * ' + b + ' = ? ' );
        console.log(primer == (a * b) ? 'Ваш ответ правильный ' + primer : 'Ваш ответ не правильный ' + primer  + '! Правильный ответ ' + (a * b));
    } else if(c == 4) {
        let primer = +prompt(a + ' / ' + b + ' = ? ' );
        console.log(primer == (a / b) ? 'Ваш ответ правильный ' + primer : 'Ваш ответ не правильный ' + primer  + '! Правильный ответ ' + (a / b));
    }
}


