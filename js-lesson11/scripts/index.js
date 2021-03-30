//function percentageCalculator(number, percentage) {
//      return number * percentage / 100;   *same but shortened 

//task 1
function percentageCalculator(number, percentage) {
    let percentage2 = number * percentage / 100;
    return percentage2;
}

console.log(percentageCalculator(50, 50));


//task2

function drinkOrder(size, drink) {
    let message = 'thanks for ordering a ' + size + ' ' + drink + '.';
    switch (drink) {
        case 'cola':
            message = drink + ' is amazing! Thanks for ordering a ' + size + ' one!';
            //     console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        case 'lemonade':
            message = 'Well done! ' + drink + ' is so fresh! Grab a ' + size + ' one!';

            //        console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        case 'orangeade':
            message = 'Whatever, ' + size + ' ' + drink + ' coming up!';
            //        console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        default:
            message = 'I have no idea what you are talking about...';
    }
    console.log(message);
    document.write(message);
}

drinkOrder('small', 'lemonade');
drinkOrder('large', 'cola');
drinkOrder('extra large', 'orangeade');
drinkOrder('extra large', 'red bull');


//task 3 calculator - going to calculate things
function calculator(number1, number2, operator) {
    let message = '';
    switch (operator) {
        case '+':
            message = number1 + number2;
            //        console.log(number1 + number2);
            break;
        case '-':
            message = number1 - number2;
            //         console.log(number1 - number2);
            break;
        case '*':
            message = number1 * number2;
            //        console.log(number1 * number2);
            break;
        case '/':
            message = number1 / number2;
            //         console.log(number1 / number2);
            break;
        case '%':
            message = number1 % number2;
            //         console.log(number1 % number2);
            break;
        default:
            console.log('Not valid input...');
    }
    console.log(message);
}

console.log(calculator(10, 100, '+'));
console.log(calculator(10, 100, '-'));
console.log(calculator(324, 10230, '*'));
console.log(calculator(43, 234, '/'));
console.log(calculator(324, 42, '%'));
console.log(calculator(32423, 324, '@'));
console.log(calculator(5, true, '*'));