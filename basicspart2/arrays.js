const arr= [1,2,3,4,5]
const names= ["devika","akam","akika"]

// console.log(arr[0])
// console.log(names[2])

//array methods

// arr.push(6)
// onsole.log(arr)
// arr.pop()
// console.log(arr)

arr.unshift(10) //push at start
// console.log(arr)

arr.shift() //remove from start
//console.log(arr)

/*console.log(arr.includes(9))
console.log(arr.indexOf(3))
console.log(arr.indexOf(9)) */

const newarr= arr.join()
// console.log(typeof newarr)

//slice and splice

console.log("A", arr)
const n1=arr.slice(1,3). //exclusive

console.log(n1)
console.log("B",arr)

const n2= arr.splice(1,3) //inclusive
console.log(n2)