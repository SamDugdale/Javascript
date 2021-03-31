/*
document.getElementById
document.getElementsByClassName()
document.getElementsByTag

document.querySelector
document.querySelectorAll
const elements = document.querySelectorAll('p:first-child'); //selector for 

for (const element of elements){
    const src = element.getAttribute('src');
    element.setAttribute('src', 'http//value.com');

    element.style.backgroundColor = '#fff';
    element.classList.add('error'); //add class from css 
}

console.log('1');
document.addEventListener('click', function (event) {
    //do something
    console.log('2');
});
*/

// Execute function and show all columns
filterSelection("all") 
function filterSelection(cols) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (cols == "all") cols = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    ttRemoveClass(x[i], "show");
    if (x[i].className.indexOf(cols) > -1) ttAddClass(x[i], "show");
  }
}

// Show filtered elements
function ttAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function ttRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}