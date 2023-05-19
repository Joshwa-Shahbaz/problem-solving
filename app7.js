// Problem: Remove duplicates from an array.

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 7, 7]; 
function nonDuplicate(num){
  let newNum = [];
let obj = {};

    for(let x = 0 ; x < num.length ; x++){
        obj[num[x]] = true
    }
    for(let items in obj){
        newNum.push(items);
    }
    return newNum
}

console.log(nonDuplicate(numbers))