
//task 1, 2, 3, 4
var shoppingCart=[
    {name:"loaf of bread",type:"food",quantity:1,price:.85},
{name:"multipack beans",type:"food", quantity:1, price:1},
    {name:"mushrooms",type:"food",quantity:10,price:.1},
        {name:"can of beer",type:"alcohol",quantity:4,price:1.1},
        {name:"prosecco",type:"alcohol",quantity:1,price:8.99},
        {name:"steak",type:"food",quantity:2,price:3.99},
        {name:"blue cheese",type:"food",quantity:1,price:2.99},
        {name:"candles",type:"home",quantity:3,price:1.99},
        {name:"cheesecake",type:"food",quantity:1,price:4.99},
        {name:"onions",type:"food",quantity:3,price:.4}];

//Task 1 & 2
//CREATE FUNCTION take arg shoppingCart
function getTotalPrice (shoppingCart, discountAmount, type) {
    //CREATE VAR totalPrice
    var totalPrice = 0;
        //LOOP items in shoppingCart
        for (var item of shoppingCart) {
            //IF item.type === food
            if (item.type === type || type === 'any') {
                  //SUBTRACT 20% from item.price
                  var discountPrice = item.price - ((item.price * discountAmount) / 100); 
            //ADD discountedPrice to totalPrice
            totalPrice += discountPrice * item.quantity
            }

            //ADD price to var totalPrice
            else {
            totalPrice += item.price * item.quantity;
            }
        //TIMES by quantity 
    }

    //RETURN VAR totalPrice
    return totalPrice.toFixed(2);
};

console.log("Task 1");
console.log(getTotalPrice(shoppingCart, 20, 'any'));

// CREATE FUNCION take arg car, lowPrice, highPrice, quantity
function getItemsBetweenLowHighPrice (cart, lowPrice, highPrice, quantity) {
    //CREATE VAR for array
    var arrItems = [];
    var price = 0;
    //LOOP through item
    for (var item of cart) {
         // USE TERNARY OPERATOR???
//THEN ADD (item.price * item.quantity : price = item.price) to VAR array

        quantity ? price = item.price * item.quantity : price = item.price

        if (price >= lowPrice && price <=highPrice) {
            arrItems.push(item);
        }
    }
 /*       if(quantity){
            var totalPrice = item.price * item.quantity; 
        } else {
            if (totalPrice >= lowPrice && totalPrice <= highPrice) {
                arrItems.push(item);
        }

        if (item.price >= lowPrice && item.price <= highPrice) {
            arrItems.push(item);
        }
    }  */
        //RETURN var array
        return arrItems;
}

console.log("Task 2");
console.log(getItemsBetweenLowHighPrice(shoppingCart, 0.2, 1, true));


var numberArray = [3,6,1,68,23,15,3,9,56,10];

function mean(numberArray) {
    var total = 0, i;
    for (i = 0; i < numberArray.length; i += 1) {
        total += numberArray[i];
    }
    return total / numberArray.length;
  
    //return numberArray.reduce((a, b) => a + b, 0) / numberArray.length;
  }
  
  console.log(mean(numberArray));
  
  
  function median (numberArray) {
    var sortedNumbers = numberArray.sort(function(a, b){return a - b});
    var mediumValue = sortedNumbers[sortedNumbers.length / 2 | 0];
  
    return mediumValue;
  }
  
  console.log(median(numberArray));
  
  function mode (numberArray) {
    var modes , count = [], i, number, maxIndex = 0;
   
      for (i = 0; i < numberArray.length; i += 1) {
          number = numberArray[i];
          count[number] = (count[number] || 0) + 1;
          if (count[number] > maxIndex) {
              maxIndex = count[number];
          }
      }
   
      for (i in count)
          if (count.hasOwnProperty(i)) {
              if (count[i] === maxIndex) {
                  modes = Number(i);
              }
          }
   
      return modes;
  }
  
  console.log(mode(numberArray));
  
  
  function getNumbertype(numberArray, type) {
    switch (type) {
      case 'mean' :
        return mean(numberArray);
        break;
      case 'medium' : 
        return medium(numberArray);
        break;
  
      case 'mode' :
        return mode(numberArray);
        break
  
      default:
        return numberArray;
    }
  }

console.log(mode(numberArray)); 





//console.log(numberArray.reduce((a, b)=> a + b, 0) / numberArray.length;

//task2