// Problem: Calculate the frequency of each word in a string and return the result as an object.

const sentence = 'I love love coding and coding is fun';

let check = sentence.split(" ");
// console.log(check)
let obj = {};

function calcWords(array){
for(let x = 0; x < array.length ; x++){
     let element = array[x];
     if(obj[element]){
        obj[element] += 1; 
     }else{
        obj[element] = 1
     }
}
return obj;
}

console.log(calcWords(check));

