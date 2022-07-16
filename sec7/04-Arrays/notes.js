const notes = [{
    title: 'My Next Book',
    body:'I will read book about design pattern'
    },{
        title: 'Habbit to works on',
        body: 'Exercies'
    },{
        title:'Build protfolio',
        body:'Build new protfolio'
    }];





const sortNotes = function (notes) {
    notes.sort(function (a,b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}






// notes.forEach(function (item,index) {
//     console.log(index)
//     console.log(item);
// });

// console.log(notes.length);
// console.log(notes);




const findNote = function (notes,noteTitle) {
    return notes.find(function (note,index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const findNotes = function(notes,query) {
    return notes.filter(function (note,index) {
        const isTitle = note.title.toLowerCase().includes(query.toLowerCase())
        const isBody = note.body.toLowerCase().includes(query.toLowerCase())
    
        return isBody || isTitle
    })
}




sortNotes(notes) 
console.log(notes)


// console.log(findNotes(notes,'Read'))
// const findNote = function (notes,noteTitle) {
//     const index = notes.findIndex(function (note,index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


// const note =findNote(notes, 'my Next Book')
// console.log(note)


// const index = notes.findIndex(function (note, index) {
//     return notes.title === "My Next Book "
// })


// console.log(index)


// !USE  "pop" method array TO DELETE FROM THE LAST OF THE ARRAY
// console.log(notes.pop())
// notes.push('My new note')

// ! USE  "shift" method array TO DELETE FROM THE FIRST OF THE ARRAY
// console.log(notes.shift())

// ! USE "splice" method TO  DELETE ir replace from specfec place
// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// notes.splice(0,0)
// ! we can use this way to replace
// notes[2] = "MY NOTE 4";



