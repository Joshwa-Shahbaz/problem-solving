// Implement a function which returns value of object according to provided string at any hiearchy level
// stringToObject("a.b", {a: {b: "Hello World"}});

// const { object } = require("prop-types")

const obj = {
    a : {
        message : {
            nested: {
                content: 'Works'
            }
        }
    },
    // c : "kashif",
    // d : 25,
    // e: 53
}


// console.log(obj.a.b)

// function that uses key to iterate an object

// function CheckString(object){

//     let string = '';
// for(let item in object){
//     if(typeof(object[item]) === 'string' ){
//         string += object[item]
//     }
// }
// return string
// }
// console.log(CheckString(obj));

// const ok = "a.b";
// const result = ok.split(".")
// console.log(result);

function string(obj , string){
    let keys = string.split(".");
    // console.log(keys)
    let value = obj;

    for(let key of keys){
        if(typeof value === 'object'){
            value = value[key]
        }
    }
    return value
}

console.log(string(obj , "a.message.nested.content"));





// let check = '';

// for(let items in obj){
//     if(typeof(obj[items] === 'strings')){
//         check += obj[items]
//     }
//     for(let x = 1 ; x < Object.keys(obj).length ; x++){
//      if(typeof(obj[items][x] === 'strings')){
//       check += obj[items][x]
//      }
// }
// }
// console.log(check)

// console.log(Object.keys(obj).length);

// let nested = obj.a

// for(let value of Object.values(nested)){
//   console.log(value)
// };


// for(let x = 1; x < Object.keys(obj).length ; x++){
//     console.log(x)
//     console.log(obj[x])
// }


// console.log(string)
// console.log(obj.name)