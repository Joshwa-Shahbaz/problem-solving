// Problem: Find the largest sum of any two numbers in an array.

const array = [2, 5, 1, 8, 4];
// const array = [300, 22, 212, 1,0,525 , 1000];

 let maxi = array[0];
 let check = [];
 let secondMax = array[1];

 for(let x = 0; x < array.length ; x++){
    if(array[x] > maxi){
        maxi = array[x]
    }
 };

 for(let x = 0; x < array.length ; x++){
 if(array[x] !== maxi){
    check.push(array[x])
}
 };

 for(let x = 0; x < check.length ; x++){
    if(check[x] > secondMax){
      secondMax = check[x]
    }
 };
 
console.log(check)

console.log(maxi+secondMax)


