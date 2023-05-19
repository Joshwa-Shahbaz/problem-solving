// Merge two objects and combine their properties. If a property
//  exists in both objects, concatenate the values into an array.

const obj1 = { a: 1 , b: 2 , c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

// let newObj = {...obj1};

// if(obj1.values === obj2.values){
    
// }

let check = {...obj1};


for(let key in obj2){
    if(obj1.hasOwnProperty(key)){
        check[key] = [check[key] , obj2[key]]
    }else{
        check[key] = obj2[key]
    }
}
console.log(check)


// console.log(check)

for(let elem in obj1){
    //  console.log(elem , obj1[elem])
    console.log(obj1[elem])
}
// console.log(newObj)

// if(obj1.includes(obj2)){
    
// }

// const men = Object.entries(obj1);
// const man = Object.entries(obj2);

// console.log(newObj)

// if(obj1.includes(obj2)){

// }



// for(let x = 1 ; x < Object.keys(obj1).length ; x++){
//     console.log(obj1[x])
// }


// for(let item in obj1){
//     console.log(obj1[item])
// }



// function