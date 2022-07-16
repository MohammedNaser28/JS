// Global scope (Converter)
    //Local Scope (fahrenheit)


let converter = function (fahrenheit){

    // We can return value like this
    // return (fahrenheit - 32) * (5 / 9);

    // Or like this
    let celsius = (fahrenheit - 32) * (5 / 9);
    if (celsius <= 0){
        let isFreezing = true
    }
    return celsius
}


console.log(converter(50))
let convertTwo = converter(12)

console.log(convertTwo)