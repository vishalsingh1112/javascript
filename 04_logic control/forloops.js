//  for loops 

 for (let i  = 0; i  <= 10; i ++) {
    const element =i ;
    if (element== 5) {
    //  console.log("5 is the best");
        
    }
    // console.log(element);
    
}




for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop called value${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
        
    }
    
}

let myArray =["flash" ,"batman","superman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

//  BREAK AND CONTINUE 

// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if (index == 5) {
//         console.log("deteched 5 exit loop");
        
//         break;
        
//     }
//     console.log("vlue is "+element);
    
    
// }


for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log("deteched 5 exit loop");
        
        continue;
        
    }
    console.log("vlue is "+element);
    
    
}