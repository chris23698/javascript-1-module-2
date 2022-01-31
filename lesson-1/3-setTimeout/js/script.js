// The setTimeout method is used to execute a
// function after a specified period of time.



setTimeout(function (){
console.log("hello im chris")
}, 2000)


// 1. select the class .loader

const loading = document.querySelector(".loader");


// 2. use setTimeOut 

setTimeout(function (){
    loading.innerHTML = "finished downloading!";
    }, 5000);

// 3. change the inner.html