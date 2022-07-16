let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326,
  };


let otherBook = {
    title:"A peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} by ${book.pageCount}`
    }
}

console.log(getSummary(myBook))

console.log(getSummary(otherBook))


// Challenge area

let convertFahrenhite = function (fahrenhite) {
    return {
        fahrenhite: fahrenhite,
        kelvin: (fahrenhite + 459.67) * (5 /9),
        celsius: (fahrenhite -32) * (5 / 9)
    }
}

let temps = convertFahrenhite(75)

console.log(temps)