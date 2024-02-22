const name= "Devika"
const age= 22

// console.log(name +age)

console.log(`Hello my name is ${name} and my age is ${age}`) //new syntax use this only

const newname= new String('Devu')
/*console.log(newname[0])
console.log(newname.length)
console.log(newname.toUpperCase())
console.log(newname.charAt(2))
console.log(newname.indexOf('v')) */

const newstring= newname.substring(0,2)
console.log(newstring)

const anotherstring= newname.slice(-4,2)
console.log(anotherstring)

const newstring2= "   Devika.  "
console.log(newstring2)
console.log(newstring2.trim())

const url= "https://devu.com/devu%20makan"

console.log(url.replace('devu','akam'))

console.log(url.includes('baby'))

const newstring3= "Devika-Makan"
console.log(newstring3.split('-'))