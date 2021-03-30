//function percentageCalculator(number, percentage) {
  //      return number * percentage / 100;   *same but shortened 

//task 1
for (var i = 1; i <=12; i++) {
    var result = i * 7;
    console.log(`${result} is 7 x ${i}`);
}    

//for (let i = 1; i <= 12; i++) {
//    console.log
 //   for(var j = 1; j <=12; j++){
 ///   console.log(`${result} is 7 x ${i}`);
//}
//}

//task2

let myFavouriteFoods = [
    'Noodles',
    'Chicken',
    'Apples',
    'Pizza'
]

console.log(myFavouriteFoods[1]);
console.log(myFavouriteFoods[3]);

//var item = items[Math.floor(Math.random() * items.length)];
//console.log(item);

for(i = 0; i < myFavouriteFoods.length; i ++) {
    console.log(myFavouriteFoods[i])
}

//task 3,4,5 arrary

var myRecipe = {
    recipeTitle = 'Chicken Noodles',
    servings: 2,
    ingredients: [
        'Onions',
        'Chicken',
        'Garlic',
        'Soy Sauce',
        'Bean Sprouts',
        'Noodles'
    ],
    directions: [
        'Heat the wok, add a tablespoon of oil',
        'Fry the chicken until brown',
        'Add garlic and onions and cook for 2 mins',
        'Add the soy sauce and noodles',
        'Cook until noodles are warm'
    ],
    letsCook: function() {
        document.write(`I'm hungry! Let's Cook ${this.recipeTitle}`)
    }
}

document.write(myRecipe.recipeTitle + '<br>');
document.write(`Serves: ${myRecipe['servings']} + <br><br>`)
document.write('Ingredients:'  + '<br>')

for (i = 0; i < myRecipe.ingredients.length; i++) {
    document.write(`- ${myRecipe.ingredients[i]} <br>`)
    if (i = myRecipe.ingredients.length) {
        document.write
    }
}

document.write(`<br> Directions: + <br>`)
for (i = 0; i < myRecipe.directions.length; i++) {
    document.write(` ${i + 1}. ${my.recipe.directions[i]} <br>`)
}

myRecipe.letsCook(); 
