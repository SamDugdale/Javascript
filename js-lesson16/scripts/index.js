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
    var show, i;
    show = document.getElementsByClassName("column");
    // Display all columns if all class is on
    if (cols == "all") cols = "";
    // Add the "show" class (display:block in css) to the filtered elements, while also removing the "show" class from the elements that are not selected
    for (i = 0; i < show.length; i++) {
        ttRemoveClass(show[i], "show");
        // If the column class name is not there remove, if it is show it
        if (show[i].className.indexOf(cols) > -1) ttAddClass(show[i], "show");
    }
}

// Show filtered elements
function ttAddClass(element, name) {
    // Get element class names
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    // show if container is selected, otherwise display none (column - attribute name)
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not the selected button
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


// Active button class to the current button by highlighting it
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}