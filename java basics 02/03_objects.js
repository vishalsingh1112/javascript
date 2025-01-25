//  singleton   = apne tarah ka object banata hai 
//  literals include no singleton 
// constructor include singleton 

//  objects literals 

const mySym = Symbol("key1")
 

const JsUser = {
    name : "vishal",
    "full name" :"vishal singh",
    [mySym] :"mykey1",
    age:20,
    location : "prayagraj",
    email: "vishal@gmail.com",
    isLoggedIn:false,
}

    // console.log(JsUser.email) use in mainly cases
    // console.log(JsUser["email"])
    // console.log(JsUser["full name"])
    // console.log(JsUser[mySym]);
    // console.log(typeof JsUser[mySym]);


    JsUser.email="vishalsavita@gmail.com"
    // Object.freeze(JsUser)
    JsUser.email= "vishalsavitasingh@gmail.com"
    // console.log(JsUser );

      JsUser.greeting = function(){
        console.log("hello js user");
        
      }
      JsUser.greeting1 = function(){
        console.log(`hello js user,${this.name }`);
        
      }

      console.log(JsUser.greeting());
      console.log(JsUser.greeting1());
      
      
    

    
    
    

    




