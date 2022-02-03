// question 1 what are function expression
// function assigned to a variable

// const myFunctionExpress = function () {
//     console.log("hey there");
// };

// myFunctionExpress ();

// //question 2
// // how to detect an event on a button


// // 1. select the button with class .btn
// const button = document.querySelector(".btn");

// // 1. way 1 is to use a function expression
// const handleClick = function handleClick(){
//     console.log("i clicked the button");
// };

// // 2. is to use addEventListener 
// button.addEventListener("click", handleClick);


// way 2
const button = document.querySelector(".btn");

button.onclick = function (){
    console.log("i clicked the button");
}



// question 3 key press
//
// the onKeyDown event is triggered when the user presses a key
// the oneKey up event is triggered when the user release the key

// the onKeyPress event
// is triggered when the user presses and releases the key
// a key (onKeyDown followed by OneKeyUp)
// note used anymore

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event) {
    console.log("a key is pressed");
    //console.log(event); gives info of event
    //console.log(event.target); gives info of input

}

myFirstNameInput.addEventListener("keydown", handleKeyPress);



// question 4 play with mouseover (to detect hovering)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (){
    theHoverBtn.classList.add("hover");
};
theHoverBtn.addEventListener("mouseover", handleMouseOver);


// question 5 play with mouseout

const handleMouseOut = function (){
    theHoverBtn.classList.remove("hover");
};
theHoverBtn.addEventListener("mouseout", handleMouseOut);

// question 6 select all the li
// on mouse over show the dataset of animal they have

const showAnimals = document.querySelector("li");

const animals = function (event){
    console.log(event.target.animals);
};
animals();