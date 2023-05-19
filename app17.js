// Problem: Implement a function which returns uncommon values in two provided objects
// const obj1 = {
//      a : "a",
//      b : "b"
// }
// const obj2 = {
//     b: "b",
//     c : "c"
// }

// for(let values of Object.values(obj1)){
  
// }


// const object = {};
// object.property1 = 42;

// console.log(object.hasOwnProperty('property1'))


function provideUncommon(obj1, obj2) {
    const uncommon = {};
    
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        uncommon[key] = obj1[key];
      }
    }
  
    for (let key in obj2) {
      if (obj2[key] !== obj1[key]) {
        uncommon[key] = obj2[key];
      }
    }
  
    return uncommon;
  }
  
  const obj1 = { a: "a", b: "b" };
  const obj2 = { b: "b", c: "c" };
  
  const result = provideUncommon(obj1, obj2);
  console.log(result);   