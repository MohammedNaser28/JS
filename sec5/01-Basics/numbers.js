// Declare numeric variabels

let int_variabels = 2;

let negative_numbers = -2;

let float_variabels = 1.5;


console.log("-------------------------------OPERATIONS ON NUMBERS----------------------------"," \n")

// operations on numbers
console.log("--------------------------------ADDITION--------------------------------------------"," \n")

// ِAddition

let Addition = int_variabels + float_variabels;

let addition = int_variabels + negative_numbers;

console.log("Addition with positive: ", Addition, "\n");

console.log("Addition with negative: ", addition, "\n");

console.log("--------------------------------SUBTRACT--------------------------------------------"," \n")


// Subtract

let Subtract = int_variabels - float_variabels;

let subtract = int_variabels - negative_numbers;

console.log("Subtract with positive: ", Subtract, "\n");

console.log("Subtract with negative: ", subtract, "\n");

console.log("--------------------------------DIVISION--------------------------------------------"," \n")

// Division

let Division = int_variabels / float_variabels;

let division = int_variabels / negative_numbers;

console.log("Division with positive: ", Division, "\n");

console.log("Division with negative: ", division, "\n");

console.log("--------------------------------MULTIPLY--------------------------------------------"," \n")


// Multiply

let Multiply = int_variabels * float_variabels;

let multiply = int_variabels * float_variabels * negative_numbers;

console.log("Multiply with positive: ", Multiply, "\n");

console.log("Multiply with negative: ", multiply, "\n");

console.log("------------------------ORDER OF ARITHMETIC OPERATIONS IN JS------------------------"," \n")

/* order of arithmetic operations in js 

    1.Parentheses are calculated first

    2.The exponent is calculated second

    3.Multiplication and division are the same level and calculated third in order

    4.Subtraction and addition at the end
*/

let order = (2 * 5 * 2 ** 3) / 8 + 96 - 20;

console.log("order of arithmetic operations in js: ", order, "\n");
