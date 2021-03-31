//Stuff we will change when we use the myBtn
thingsToChange = () => {

    document.getElementById("my-h1").innerHTML = "Peace Out World!";
    
    document.getElementById("my-p1").style.color = "red";

    let pg = document.getElementsByClassName("my-p2");
    for (let item of pg) {
        item.style.color = "blue";
    }

    let newPg = document.createElement("p");
    let node = document.createTextNode("This is a new paragraph");
    newPg.appendChild(node);
    let element = document.getElementById("main-content");
    element.append(newPg);

    document.getElementById("myBtn").style.display = "none";

}


//Change the stuff as specified in thingsToChange function
document.getElementById("myBtn").addEventListener("click", thingsToChange);

//When user hovers over hover-p, function alert text
document.getElementById("hover-p").addEventListener("mouseover", () => {
    alert("Hey, you hovered over me!");
});


//Stop link being followed when clicked. Instead, alert link blocked
document.getElementById("my-link").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Link blocked")
});


//Change the myButton styling when clicked
let myButton = document.getElementById("click-it").addEventListener("click", (event) => {
    let btn = event.currentTarget;
    btn.style.backgroundColor = "pink";
    btn.innerHTML = "I have been clicked"
})


//When submitBtn is clicked, get first name & last name then alert
let submitBtn = document.getElementById("submitBtn").addEventListener("click", (event) => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
//get element age by looking at which radio option is selected and log the value to be used in alert
    let radios = document.getElementsByName("age");
    let radioValue;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioValue = radios[i].value;
            console.log(radioValue)
        }
    }
    alert(`Hi ${fname} ${lname}! You are ${radioValue}years old!`)
})