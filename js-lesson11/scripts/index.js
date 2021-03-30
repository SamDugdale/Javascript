//function percentageCalculator(number, percentage) {
//      return number * percentage / 100;   *same but shortened 

//task 1
function percentageCalculator(number, percentage) {
    let percentage2 = number * percentage / 100;
    return percentage2;
}

console.log(percentageCalculator(50, 50));
document.write("percentageCalculator:<br> 19 percent of 71 is: " + percentageCalculator(19, 71) + "<br><br>" + "Switch Statement (drinkOrder): <br> ");



//task2

function drinkOrder(size, drink) {
    let message = 'thanks for ordering a ' + size + ' ' + drink + '.';
    switch (drink) {
        case 'cola':
            message = drink + ' is amazing! Thanks for ordering a ' + size + ' one!<br>';
            //     console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        case 'lemonade':
            message = 'Well done! ' + drink + ' is so fresh! Grab a ' + size + ' one!<br>';

            //        console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        case 'orangeade':
            message = 'Whatever, ' + size + ' ' + drink + ' coming up!<br>';
            //        console.log('thanks for ordering a ' + size + ' ' + drink + '.');
            break;
        default:
            message = 'I have no idea what you are talking about...<br>';
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

    let message;
    
    let validOperator = true;

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
            validOperator = false;
            break;
                     }

    if (!validOperator) {
        return 'Operator not recognised.';
    } else if (number2 === 0 && operator === '/') {
        return 'You cannot divide by zero.';
    } else if (typeof (number1) != 'number' || typeof (number2) != 'number') {
        return 'You chose a value that is not a number.';
    } else {
        return `${number1} ${operator} ${number2} = ${message}`;
    }
}

console.log(calculator(10, 100, '+'));
console.log(calculator(10, 100, '-'));
console.log(calculator(324, 10230, '*'));
console.log(calculator(43, 234, '/'));
console.log(calculator(324, 42, '%'));
console.log(calculator(32423, 324, '@'));
console.log(calculator(5, true, '*'));