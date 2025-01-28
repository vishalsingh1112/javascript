//   functions are the block of code that are packed into packages and you can make copies of it 
// Functions in JavaScript are reusable blocks of code that perform specific tasks. They can take inputs, perform actions, and return outputs. 
function sayMyName(){



console.log("v");
console.log("i");
console.log("s");
console.log("h");
console.log("a");
console.log("l");
}

// sayMyName is reference () is execution 
//  sayMyName()
// console.log(sayMyName());

//   function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
//  }

function addTwoNumbers(number1 , number2){
//    let result = number1+number2;
//    return result;
   return number1+number2
   
 }
  const result = addTwoNumbers(3 ,5);
//   console.log( "Result" ,result); 
  

//  parameters are the value which are defined as input (number1 , number2)
// arguments (called value ) (3,5)

function loginUserMessage(username){
    if (username === undefined) {
        // console.log("please enter username");
        return
         } //else{
        //     username==="vishal"
        // }
    return`${username} just logged in`

}
// console.log(loginUserMessage("vishal"));


function calculatedCartPrice(...num1){
    return num1
}
// console.log(calculatedCartPrice(200 , 3000 , 4000,))

const user = {
    username:"vishal",
    age : 20,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
} 
// handleObject(user)
handleObject({
    username:"vish",
    age:20,
     
})

const myNewArray =[300 , 400 , 500]

function returnSecondValue(useArray){
    return useArray[1]
}
console.log(returnSecondValue(myNewArray));



