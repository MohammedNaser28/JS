// let name = "Ahmed"
// This is undefined because we didn't give it any value
let name

if (name === undefined){
    console.log("Please provide a name ")
}else {
    console.log(name)
}
// console.log(name)

// Undefined for function argument

let square = function (num) {
    console.log(num)
}
// This will return undefined because we didn't give the function any value
square()

// We will return undefined because the function not return anything
let result = square()

console.log(result)



let age = 27

// age = undefined

age  = null

console.log(age)
