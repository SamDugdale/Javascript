//task1 
//console.log(document.getElecems )
var button = document.getElementById("myBtn");
button.addEventListener("click", function (event) {
    alert("Hi!");
});
//OR
var button = document.getElementById("myBtn");
var sayHi = function (event) {
 alert("Hi!");
};
button.addEventListener("click", sayHi);