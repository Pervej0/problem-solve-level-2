// Problem Solving:

// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender.
// Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  {
    name: "Alice",
    age: 25,
    gender: "female",
  },
  {
    name: "Bob",
    age: 30,
    gender: "male",
  },
  {
    name: "Charlie",
    age: 22,
    gender: "female",
  },
  {
    name: "Jon Doe",
    age: 25,
    gender: "male",
  },
  {
    name: "Diana",
    age: 28,
    gender: "female",
  },
  {
    name: "Edward",
    age: 35,
    gender: "male",
  },
];

const females = (items) => {
  items.filter((item) => item.gender === "female");
  const names = items.filter((item) => item.gender !== "female");
  return names.map((item) => item);
};

const printResult = females(people);
// console.log(printResult);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year.
// Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
];

const bookTitle = (items) => {
  const titles = items.map((item) => item.title);
  return titles;
};

const titles = bookTitle(books);

// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const squareNumber = (n) => {
  return n * n;
};

const doubleNumber = (n) => {
  return n * 2;
};

const addFiveNumber = (n) => {
  return n + 5;
};

const composeFunction = () => {
  return squareNumber(doubleNumber(addFiveNumber(3)));
};

const composeResult = composeFunction();
console.log(composeResult);

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year.
// Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 2019,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
  },
];

const sortedArray = (items) => {
  const sorted = items.sort((item1, item2) => item1.year - item2.year);
  return sorted;
};

const sortedResult = sortedArray(cars);
console.log(sortedResult);

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name.
// If found, modify their age property. Print the updated array.

const findAndModify = (items, name, updatedAge) => {
  const existedItem = items.filter((item) => item.name === name);
  if (existedItem.length < 1) {
    console.log("The person dose not exist!");
    return;
  }
  existedItem.map((item) => (item.age = updatedAge));

  return items;
};

const updatedResult = findAndModify(people, "Jon Doe", 500);
console.log(updatedResult);

// 6.Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// 7.  Task: Leap Year Checker

// Write a function that determines whether a given year is a leap year.

// Example: Happy New Year

// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// 09. Task: Find Maximum Value:

// Write a function that takes an array of numbers and returns the maximum value.

// 10.Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// 11. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
