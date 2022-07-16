let name = '   Ahmed Naser   '


// length property  (length)

console.log(name.length)

//! convert to  UPPER CASE  (toUpperCase())

console.log(name.toUpperCase())

//! Convert to LOWER CASE (toLowerCase())

console.log(name.toLowerCase())


//! Include method

let password = "ABDSFDDFDFPASSWORD4454454836"

console.log(password.includes("PASSWORD"))


//! trim

console.log(name.trim())



//!  Challenge 


// isValidPassword


//! let isValidPassword = function (password) {
//      if (password.length > 8 && password.includes('password') == false) {
//          console.log("password is valid")
//      }else {
//          console.log("password isn't valid")
//      }
// }

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes("password")
}


//length is more than 8 - and it doesn't contain word password

isValidPassword(password)

let pass = "mkfdmkfpasswordkdfdljgkfg0"

isValidPassword(pass)