// Implement a function that generates a random password with a given length.
function randomPassword(length){
    let charcters = "qwertyuiopasdfghjklzxcvbnm123456789!@#$%^&*";
    let string = '';
    for(let x = 0; x < length ; x++){
    let randomNUm = Math.floor(Math.random() * charcters.length);
    string += charcters[randomNUm];
    }
   return string;
}

console.log(randomPassword(10));



// var check = "qwertyuiuooplkjhgfdaszxcxvbnm123456789!@#$%^&*"

// console.log(check.length)


// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random() * check.length))