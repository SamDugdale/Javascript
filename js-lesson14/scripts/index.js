
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
    return totalPrice;
};

console.log(getTotalPrice(shoppingCart, 20, 'any'));


function getItemsBetweenLowHighPrice (cart, lowPrice, highPrice, quantity) {
    var arrItems = [];
    var price = 0;

    for (var item of cart) {
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

        return arrItems;
}

console.log(getItemsBetweenLowHighPrice(shoppingCart, 0.2, 1, true));


var numberArray = [3,6,1,68,23,15,3,9,56,10];

function mean (numberArray) {
    return numberArray.reduce((a, b)=> a + b, 0) / numberArray.length;
}

console.log(mean(numberArray));


function median (numberArray) {
    var sortedNumbers = numberArray.sort(function(a, b){return a - b});

    var value = sortedNumbers[sortedNumbers.length / 2 | 0];
    
    return value;     
}

console.log(median(numberArray));

function mode (numberArray) {
    var modes , count []


}

console.log(mode(numberArray)); 





//console.log(numberArray.reduce((a, b)=> a + b, 0) / numberArray.length;

//task2