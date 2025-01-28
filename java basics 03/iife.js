//  Immediately Invoked Functions Expressions (IIFE)
//  global scope ke pollution sai bachne ke liye iife use krtey hai 


 (function chai (){
    //  named iife 
    // console.log(`DB CONNECTED `);
    
 }) ();
//  chai()

(    (name) => {
    //  unnamed iife 
    // console.log(`DB CONNECTEDB 2 ${name}`);
    
})("vishal")

let val1 = 10 
let val2 = 5

function addNum(num1 , num2){
    let total = num1 + num2

return total
}

let result1 = addNum(val1, val2)
let result2 =  addNum(2,5)
console.log(result1);
console.log(result2);



