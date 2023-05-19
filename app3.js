
// Problem: Count the occurrences of each element in an array and return the result as an object.

const fruits = ['apple', 'banana',"banana", 'apple', 'orange', 'banana', 'grape', 'banana'];
let obj = {};

for(let x = 0; x <fruits.length ; x++){
    let item = fruits[x];

    if(obj[item]){
        obj[item] += 1;
    }else{
        obj[item] = 1;
    }

}
console.log(obj)

// for(let x = 0; x < fruits.length ; x++){
//    obj[fruits[x]] = true
// }
// let newarray = [];
// for(let items in obj){
//     newarray.push(items);
// }
// console.log(newarray)