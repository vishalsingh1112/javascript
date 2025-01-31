// const myNumbers = [ 1,2,3,4,5,6,7,8,9]

// const newNums =myNumbers.map((num) => num+10)

// const newNums = myNumbers.map((num) => num*10).map((num) => num+1)
// .filter((num) => num >=40)


 
// console.log(newNums);


//   reduce js 


 
  const myNums = [1,2,3]

//   const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc + currval

    
//   }, 0)

 const myTotal =myNums.reduce((acc , currval) => acc + currval , 0 )
  console.log(myTotal);
  
  