// Multiple argument
let add = function (a,b,c) {
    return a + b + c
}


let result = add(5454,4754,54)
console.log(result)

// Default argument
//
// let getScoreText = function (name ="Guest" , score = 0){
//     console.log(name)
//     console.log(score)
// }

let getScoreText = function (name ="Guest" , score = 0){
    return `Name: ${name} - Score: ${score}`
}
// If we didn't give the function any value it will use the default value
let scoretext = getScoreText()
console.log(scoretext)
// Here it will use the argument
scoretext = getScoreText("Ahmed",100)
console.log(scoretext)

// Challenge
let getTip = function (total, tip=0.2) {
    return total * tip

}

let tips = getTip(50,0.255)
console.log(tips)
//total, tipPercent
// There's no difference between double and single
console.log("Mohammed" + 'Naser')


let m = 'Ahmed'

// You can inject value using `${variables}`
console.log(`Hey, My name is ${m}!`)




// Challenge
let getTips = function(total,tipPerecent = .2){
    // let percent = tipPerecent * 100
    // let tip = total * tipPerecent
    return `A ${tipPerecent * 100}% tip on $${total} would be $${total * tipPerecent}`
}

console.log(getTips(255))