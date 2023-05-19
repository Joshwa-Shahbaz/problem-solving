// 6- Problem: Check if a given string is a palindrome 
// (reads the same forward and backward).
const str = "madam";


function palindrome(str){
    let text = str;
    let reverseText = '';
    for(let x = str.length-1 ; x >= 0 ; x--){
        reverseText+= str[x];
    }
    if(text === reverseText){
        return true
    }else{
        return false;
    }
    
}
console.log(palindrome(str));