// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.



// setInterval ( function (){
// console.log("hello i am chris")
// }, 200000);



// let count = 0;

// const interValid = setInterval( function(){
// console.log("here");
// count = count + 1;
// console.log(count);
// if (count === 5) {
//     console.log("interval finished");
//     clearInterval(interValid);
// }
// }, 1000)



// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds
// 1. Select the .container ul
// 2. declare a count variable
// 3. setInterval Method
// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use append to add the li to the ul
// OR >> container.innerHTML += <li>${countSecond}</li>;
// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval


const list = document.querySelector(".container");
let stuffList = document.createElement("li");
 let count = 0;

const interValid = setInterval( function(){
count = count + 1;

stuffList.innerHTML = `${count}`
list.append(stuffList);
if (count === 100) {
    console.log("interval finished");
    stuffList.innerHTML = "complete"
    stuffList.classList.add("newClass")
    stuffList.style.border = "green solid 10px"
    stuffList.style.color = "white"
    clearInterval(interValid);
}
}, 10)

