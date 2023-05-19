// Problem: Given an array of objects, group the objects
//  by a specific property and return the result as an object.
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'Dave', grade: 'C' },
    { name: 'Eve', grade: 'B' },
    { name: 'Joshwa', grade: 'D' },
    { name: 'Haseeb', grade: 'F' },
  ];


  students.sort(function (a,b){
    if (a.grade < b.grade) {
      return -1;
    }
    if (a.grade > b.grade) {
      return 1;
    }
    return 0;
  } )

  console.log(students)


// console.log(students[0].grade)

//   console.log(students.length)

const checkName = [
    { name: 'Henry' },
    { name: 'Alex' },
    { name: 'Morgan' },
    { name: 'Bale' },
]

// console.log( Object.values(player_names[0]) )



let result = checkName.sort((a,b) =>{
  if(a.name < b.name){
    return -1;
  }else if (a.name > b.name){
    return 1;
  }else{
    return 0;
  }
})

console.log(result)


checkName.sort(function (a,b){
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
})
console.log(checkName)


// for(let x = 0; x < checkName.length ; x++ ){
//    console.log(checkName[x].name)
// }

// for(let items of checkName){
//   //  console.log(Object.values(items))
// }

// let sort_names = player_names.sort((a,b) =>{
//     let check = player_names.a.grade
//     check.localeCompare(b.grade)
// });
// console.log(sort_names);