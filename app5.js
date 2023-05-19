// 5- Problem: Convert an array of strings to uppercase.

const strings = ['apple', 'banana', 'orange'];

function captitalStrings(array){
    let check = [];
    for(let x = 0 ; x < array.length ; x++){
        let value = array[x];
        let result = value.toUpperCase();
        check.push(result);
    }
    return check;
}

console.log(captitalStrings(strings));



// let text = "joshwa"
// console.log(text.toUpperCase())

// let text = "hello world!";
// let result = text.toUpperCase();
// console.log(result)
