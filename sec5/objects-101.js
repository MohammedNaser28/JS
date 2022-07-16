let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challange area

let person = {
  name: "Mohammed",
  age: 16,
  location: "Egypt",
};

console.log(
  `My name is ${person.name} I'm ${person.age} years old, I live in ${person.location}`
);

person.age = person.age + 1

console.log(
    `My name is ${person.name} I'm ${person.age} years old, I live in ${person.location}`
  );