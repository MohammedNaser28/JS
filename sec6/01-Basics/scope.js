// Lexical Scope (Static Scope)
// Global Scope - Defined outside all code block
// Local SCope - Defined in a code blockl
// In a scope you can access variables defined in that scope, or in any parent/anyparent
// Global SCope (varone)
    // local Scope (vartwo)
        //local scope (varfour)
    // local scope (varthree)

let varOne = 'var-one'

if (true) {
    console.log(varOne)
    let varTwo = 'var-two'
    console.log(varTwo)

    if (true){
        let varfour = 'var-four'
    }
}
if (true) {
    let varthree = 'var-three'
}
 console.log(varTwo)