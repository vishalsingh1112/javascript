//   stack (primitive)  , heap (non primitive )

let myYoutubename ="vishalsingh";

let anothername = myYoutubename
anothername = "vishal"

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email : "user@gmail.com",
     upi : "user@axis"
     
}
 
let usertwo = userone
    
usertwo.email = "vishal@gmail.com"

console.log( userone.email);
console.log(usertwo.email);

