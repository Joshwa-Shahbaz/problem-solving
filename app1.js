
// Problem: Find the sum of all numbers in an array.

const numbers = [1, 2, 3, 4, 5];

function sumOfNumber(num){
    let sum = 0
    for(let x = 0; x < num.length ; x++){
        sum += num[x];
    }
    return sum;
}

console.log(sumOfNumber(numbers));