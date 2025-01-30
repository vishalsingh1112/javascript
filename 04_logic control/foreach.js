const coding = ["js" , "java" ,"cpp" , "py" , "ruby"]

// coding.forEach( function  (item) {
//     console.log(item);
    
// } )

// coding.forEach( (value)=> {
//     console.log(value);
    
// })

// function printMe (item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item ,index , arr);
    
// })

// const myCoding =[
//     {
//         languageName : "javascript",
//         languageFileName: "js"    
//     },

//     {
//         languageName : "python",
//         languageFileName: "py"    
//     },
//     {
//         languageName : "java",
//         languageFileName: "java"    
//     }

// ]
// myCoding.forEach( (item) => {
    
//     console.log(item.languageFileName );
    
// })

// const myNums = [1 ,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.filter((num) => num > 4 )
// console.log(newNums);

// const myNums = [1 ,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.filter((num) => {
//     return num >4 
// } )

// const newNums =[]

// myNums.forEach((num) =>{
//     if (num>4) {
//        newNums.push(num) 
//     }
// })
 
// console.log(newNums);


const books =[

  {  title : 'Book One', genre : 'fiction' , publish : 1981 ,
    edition:2004 },
    {
        title : 'Book Two ' , genre : 'history ', publish :1992 , edition:2008
    },

    {title :'book three' , genre : 'non-fiction', publish:1999 , edition :2007},
    {title : 'book four ' , genre : 'science' ,publish : 2000 ,  edition:2009}


];

let userBooks = books.filter((bk) => bk.genre === 'history')
userBooks = books.filter((bk) => { return bk.publish >= 1995 && bk.genre ==='history'})
console.log(userBooks);

