// DOM - Document Object Model
//! We use "textContent" To get the text insid element
//? const p = document.querySelector('p').textContent

//! We use reomve method to delete element from the html doument.
//? const p = document.querySelector('p').remove()



const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    p.textContent = "Hello Mohammed!"
    // console.log(p.textContent)
    // p.remove()
})

console.log(p)