// Merge two arrays and remove duplicates.

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];


let check = [...arr1];

for(let x = 0; x < arr2.length ; x++){
    let elemnt = arr2[x];
    if(!check.includes(elemnt)){
        check.push(elemnt)
    }
}
console.log(check)