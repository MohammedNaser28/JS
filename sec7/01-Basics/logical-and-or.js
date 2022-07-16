let temp = 155

// Logical And Operator True is both side is True - False otherwise
// Logical Or operator - True if at least one side is True. False otherwise.

if (temp >= 60 && temp <= 90) {
    console.log("It's pretty nice out.")
}else if (temp <= 0 || temp >= 120){
    console.log("Do not go outside")
}else {
    console.log("Do what you want.")
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both Vegan ?

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("All is Vegan")
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("only one is vegan.")
}else {
    console.log("Nobody is Vegan")
}