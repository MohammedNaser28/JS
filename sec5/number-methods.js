let number = 103.554

// toFixed()
console.log(number.toFixed(5))

// Math.round()

console.log(Math.round(number))

// Math.floor()
console.log(Math.floor(number))

// Math.ceil()
console.log(Math.ceil(number))

let min = 10
let max =  20

// give random number between 0 and 1
// let randomNum = Math.random()

let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum)


// challnge area


let makeGuess = function (num) {
    let min = 1
    let max =  5
    let random = Math.floor(Math.random() * (max-min + 1)) + min

    return num === random
}

console.log(makeGuess(3))