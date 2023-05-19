// Calculate the factorial of a given number.

const num = 5;

function factorail(number){
    multiply = 1;
    for(let x = number ; x > 0 ; x--){
        multiply *= x;
    }
  return multiply
}

console.log(factorail(num))

// for(let x = 5 ; x > 0 ; x--){
//     console.log(x)
// }