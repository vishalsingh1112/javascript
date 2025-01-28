// const tinderuser = new Object()
const tinderUser = {}

tinderUser.id="123ert"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
 
// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        username: {
            firstname:"vishal",
            lastname:"singh",

        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}


//  const obj3=Object.assign({} ,obj1,obj2)  //  .assign used to target the value where we want to store 
const obj3={...obj1, ...obj2}
// console.log(obj3);


 const users =[
    {
        id:1,
        email:"v@gmail.com"


    },{

    },{

    },

 ]
 users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 
 const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

 }
//  course.courseInstructor
const {courseInstructor : instructor} = course 
console.log(instructor );

//  {} used for destructuring


//  json format api 

//  api used for apna kam kisi aur talna ya dena >
  // {
  //   "name" :"vishal singh",
  //   "coursename": "js in hindi",
  //   "price" :"free"


  // }
   
  // [
  //   {},
  //   {},
  //   {},
  // ]

 
 
 

