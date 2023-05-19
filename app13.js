const values = [0, false, '', null, undefined, NaN, 'apple', 42];
const newValue = []; 



function removeFalsy(array){
    for(let x = 0; x <array.length ; x++){
        if(array[x] !== 0 && array[x] !== false && array[x] !== '' && array[x] !== null
        && array[x] !== undefined && isNaN()!=NaN ){
     newValue.push(array[x])
    //  console.log(typeof array[x] )
        }
    }
    return newValue;
}

console.log(removeFalsy(values));