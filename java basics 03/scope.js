//  start with let var const 
let a = 300
if(true){
let a = 10;
var b = 20;
const c = 30;
// console.log("INNER", a);

}

// console.log(a);
// console.log(b);
// console.log(c);

//  NESTED SCOPE 

function one(){
    const username = "vishal"

    function two(){
        const website ="youtube"
        // console.log(username);
        
    }
    //  console.log(website);
      two()
    
}
// one()

if (true) {
    const username = "vishal"
    if (username=== "vishal") {
        const website = " youtube"
        // console.log(username + website);
        
        
    }
    // console.log(website);
    

    
}
// console.log(username); 


//  +++++++++++++++++++ INTRESTING +++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}

const addtwo = function(num){
    return num +2
}
console.log(addtwo(5))






