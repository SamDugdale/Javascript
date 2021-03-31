//function percentageCalculator(number, percentage) {
//      return number * percentage / 100;   *same but shortened 

//task 1
for (var i = 1; i <= 12; i++) {
    var result = i * 7;
    console.log(`7 x ${i} is ${result}`);
    document.write(`7 x ${i} is ${result} <br>`);
}

//for (let i = 1; i <= 12; i++) {
//    console.log
//   for(var j = 1; j <=12; j++){
///   console.log(`${result} is 7 x ${i}`);
//}
//}

//task2

document.write("<br><h3>My Favourite foods</h3>");
let myFavouriteFoods = [
    'Noodles',
    'Chicken',
    'Apples',
    'Pizza'
]

//console.log(myFavouriteFoods[1]);
//console.log(myFavouriteFoods[3]);

//var item = items[Math.floor(Math.random() * items.length)];
//console.log(item);

for (i = 0; i < myFavouriteFoods.length; i++) {
    console.log(myFavouriteFoods[i])
    document.write("<br>" + myFavouriteFoods[i]);
}

randomNumber = Math.floor(Math.random() * myFavouriteFoods.length);
console.log(myFavouriteFoods[randomNumber]); 
document.write("<br><h4>Random Food:<br></h4>" + myFavouriteFoods[randomNumber]); 


//task 3,4,5 arrary
/*
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
*/
let recipe = {
    recipeTitle: 'Chickeroni Pizza',
    servings: '2',
    ingredients: ['Pizza Base', 'BBQ Sauce', 'Cheese', 'Chicken', 'Peperoni'],
    directions: ['1.Prepare pizza base and cover in sauce ', '2.Add Cheese ', '3.Add Chicken and Peperoni ', '4.Add more cheese ', '5.Cook at 190C for 18 mins ', '6.Cut and Serve '],
  
    letsCook: function () {
        console.log(`I'm hungry! Lets cook ${this.recipeTitle}!`)
        document.write(`<br><h4>I'm hungry! Lets cook:</h4> ${this.recipeTitle}!`)
    },

    printIngredients: function () {
        console.log('INGREDIENTS');
        for (i = 0; i < this.ingredients.length; i++) {
            console.log(`Ingredient ${i+1} is ${this.ingredients[i]}`);
        };
    }
};
recipe.letsCook();
recipe.printIngredients();
console.log(recipe.directions);
//document.write("<br><h4>Favourite Meal:</h4><br>" + recipe.recipeTitle);
document.write("<br><h5>Directions to cook:</h5><br>" + recipe.directions);

//recipe.letsCook = recipeOutput;

//document.write(recipeOutput)