// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.



showMeMessage();

function showMeMessage() {
    console.log("hello world")
}


doSomething(); // error, wont work

const doSomething = function(){
    console.log("hello there")
}



function logTheArgument()