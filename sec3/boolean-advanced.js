let isAccountLocked = true;
let userRole = 'admin';
/*
if (isAccountLocked) {
    console.log("Is account locked")
} else {
    console.log("Welcome!")
}
*/
if (isAccountLocked) {
    console.log("Is account locked");
} else if (userRole === 'admin') {
    console.log("Welcome Admin!");
} else {
    console.log("Welcome!");

}


// Challenge

let temp = 4500
if (temp <= 32) {
    console.log("It's freezing outside.")
} else if (temp >= 110) {
    console.log("It's hot outside.")
} else {
    console.log("Go for it, it's pretty nice.")
}