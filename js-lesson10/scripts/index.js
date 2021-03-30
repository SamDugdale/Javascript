// Single line comment
alert('Hello World!');
console.log('Secret Message');
/* 
Comment block
 */
document.write('Message on the page!')

/*
let variableOne = bwah;
alert('Lesson Number: ' + variableOne);
console.log('Lesson Number: ', variableOne);
document.write('Lesson Number: ', variableOne)
*/

//Invoking a sentence later in code from function
function invokeSentence(wordOne, wordTwo, wordThree) {
    var invokeSentence = `${wordOne} ${wordTwo} ${wordThree}`
    return invokeSentence
}

let iSentence = invokeSentence('Sam', 'says', 'hi!')

document.write("<br>Function invoked later in code: " + iSentence)

function fullName(firstName, lastName) {
    //  var firstName = 'Rachel '
    // var lastName = 'Emsley'
    // var fullName = firstName + lastName
    var fullName = `${firstName} ${lastName}`
    //console.log(fullName)
    return fullName
}

let firstNumber = 4;
let secondNumber = 10;

console.log("Add", firstNumber + secondNumber);
console.log("Subtract", firstNumber - secondNumber);
console.log("Multiply", firstNumber * secondNumber);
console.log("Divide", firstNumber / secondNumber);
console.log("Modulo", firstNumber % secondNumber);

fullName('Sam', 'Dugdale')
//fullName('Jane', 'Doe')

let myName = fullName('Sam', 'Dugdale')

console.log(myName)
document.write("<br>My name: " + myName + " (combining first and last names, accepted as arguments. Using RETURN statement function to set value of variable)")


function putOnCoat(temperature) {
    let sentence = '';
    if (temperature <= 50 && temperature >= 30) {
        sentence += 'put on coat'
    }
    if (temperature <= 30 && temperature >= 0) {
        sentence += 'put on coat and hat'
    }
    if (temperature <= 0) {
        sentence = 'stay inside'
    }
    if (sentence == '') {
        sentence = 'pants and vest are fine'
    }

    console.log('putOnCoat', sentence)
}


let currentTemperature = 30
putOnCoat(currentTemperature)


function putOnCoat2(temperature) {
    let sentence = '';
    if (temperature < 50 && temperature > 30) {
        sentence += 'put on coat'
        return sentence
    } else if (temperature < 30 && temperature > 0) {
        sentence += 'put on coat and hat'
        return sentence
    } else if (temperature < 0) {
        sentence = 'stay inside'
        return sentence
    } else {
        sentence = 'pants and vest are fine'
        return sentence
    }
}

console.log('putOnCoat2', putOnCoat2(60))


// Put on a coat task 
function shouldIPutOnACoat3(temp) {

    console.log(temp < 30);

    if (temp <= 50 && temp > 30) { 
        var message = "Put On A Coat";
    } else if (temp <= 30 && temp != 0) {
        var message = "Put On A Coat & Hat";
    } else if (temp === 0) {
        var message = "Stay Inside";

    } else {
        var message = "Pants & Vest is fine";
    }

    return message;
};

var temp = 0;

console.log('putOnCoat3', shouldIPutOnACoat3(temp));
document.write("<br>Should I put on a Coat?: " + shouldIPutOnACoat3(temp))
