 
 
 // Question 1: 
 /*
       *
      **
     ***
    ****
   *****
 */

//    for(let i = 0; i < 5; i++){
//     let row = "";
//     for(let j = 0; j < 5; j++){
//         if(j >= 5 - i - 1){
//             row += "*";
//         }
//         else{
//             row += " ";
//         }
//     }
//     console.log(row);
//    }

for(let i = 0; i < 5; i++){
    let row = "";
    for (let j=0; j<5-(i+1); j++){
        row += ".";
    }
    for(let k=0; k<i+1; k++){
        row += "*";
    }
    console.log(row);
}

// Question 2:
/*
   1
   1 0
   1 0 1
   1 0 1 0
   1 0 1 0 1
*/
//  for(let i = 0; i < 5; i++){
//     let row = "";
//     for(let j=0; j< i+1; j++){
//         row += j%2;
//     }
//     console.log(row);
//  }

for(let i = 0; i < 5; i++){
    let row = ""; 
    let num = 1;
    for(let j=0; j<i+1; j++){
        row += num;
        if(num == 1){
            num = 0;
        }
        else{
            num = 1;
        }
    }
    console.log(row);
}



// Question 3:
{/*
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
*/}


let num = 1;
for(let i = 0; i < 5; i++){
    let row = "";
    for(let j =0; j<i+1; j++){
        row += num;
        if(num == 1){
            num = 0;
        }
        else{
            num = 1;
        }
    }
    console.log(row);
}
