function hello() {
    console.log('hello world')
}

hello();

function fullName(firstName, lastName) {
  //  var firstName = 'Rachel '
   // var lastName = 'Emsley'
   // var fullName = firstName + lastName
   var fullName = `${firstName} ${lastName}`
    //console.log(fullName)
    return fullName
}

fullName('Rachel', 'Emsley')
//fullName('Jane', 'Doe')

let myName = fullName('Rachel', 'Emsley')

console.log(myName)

function putOnCoat(temperature) {
    let sentence = '';
    if (temperature <= 50 && temperature >= 30) {
        sentence +='put on coat'
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
        sentence +='put on coat'
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