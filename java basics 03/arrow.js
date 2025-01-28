const user = {
    username :"vishal",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="vish"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "vishal"
//     console.log(this.username);
    
// }
// chai()
const chai = () =>{
    let username="vishal"
    console.log(this);
    
}
// chai()


//  arrow functions 

// const addTwo = (num1 , num2 )=>{
//     return num1 +num2
// }

// const addTwo = (num1 , num2 )=> num1 +num2

// 

const addTwo = (num1 , num2) => ({username :"vishal"})
console.log(addTwo (4,4))
 
