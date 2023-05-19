// Problem: Flatten a nested object into a single-level object.

const nestedObject = {
    id: 1,
    name: 'Alice',
    details: {
      age: 25,
      address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
      }
    }
  };

//   console.log(array.flat(Infinity));

  const array = [5,2,5,4,[2,3,6,[2,5]]];
//   let newArray = [];


// function arrayFlatten(array){
//     for(let x = 0; x < array.length ; x++){
//       if(Array.isArray(array)){
//           arrayFlatten(array);
//       }else{
//         newArray.push(array)
//       }
//     }
//     return newArray;
// }

// console.log(arrayFlatten(array))


const arrayFlatten = (array) =>{
    array.forEach(element =>  {
        
    });

}

// for(let data of array){
//     console.log(data)
// }


// let newArray = [];

// array.forEach((data) => {
//     if(Array.isArray(data)){
//     }else{
//         newArray.push(data)
//     }
   
// })
// console.log(newArray)

//   console.log(array.length)