// Problem: Find the average of all numbers in an array.

const numbers = [5, 10, 15, 20, 25];
average = 1;

function calcAverage(array){
    let n = array.length
    let sum = 0;
for(let x = 0 ; x < array.length; x++){
    sum += array[x];
}
console.log(sum/n)

}

calcAverage(numbers);