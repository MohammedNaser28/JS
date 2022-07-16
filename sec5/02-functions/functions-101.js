
let greetUser = function () {
    console.log("Welcome Mohammed!")
}

greetUser()
greetUser()
greetUser()
// Input in function called Argument
let square = function (num) {
    // console.log(num)
    let result = num * num
    // return keyword is used to return value from function
    return result
}
// We can print the value like this
console.log(square(8))

console.log(square(85))

// We can store the return value in variables

let value = square(7)

let otherValue = square(60)

console.log(value)

console.log(otherValue)



// Challenge

let converter = function (fahrenheit){
    // We can return value like this
    return (fahrenheit - 32) * (5 / 9);
    // Or like this
    // let celsius = (fahrenheit - 32) * (5 / 9);
    // return celsius
}


console.log(converter(50))
let convertTwo = converter(12)

console.log(convertTwo)