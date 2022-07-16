// const isRaninig = true
// isRaninig = false

const person = {
    age: 27,
}

// we can change property in const object but we can't change the all object
person.age = 29;


console.log(person);

//!challange

const calc = function (score, totlascore) {
    const = (score / totlascore) * 100;
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You goat a ${letterGrade} (${percent}%)`
}


console.log(calc(140, 140));
