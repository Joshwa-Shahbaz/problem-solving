
// Reverse a string.

const str = 'Hello, World!';
let newstr = "";
for(let x = str.length-1 ; x >= 0 ; x--){
  newstr += str[x]
}
console.log(newstr)