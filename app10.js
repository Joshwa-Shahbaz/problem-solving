// Find the maximum and minimum values in an array

const numbers = [5, 10, 3, 8, 1];

function max(num){
 let max = num[0];
for(let x = 0 ; x < num.length ; x++){
    if(num[x] > max){ max = num[x]}
}
return max;
}

console.log(max(numbers))

function min(num){
    let min = num[0];
   for(let x = 0 ; x < num.length ; x++){
       if(num[x] < min){ min = num[x]}
   }
   return min
   }

console.log(min(numbers))


