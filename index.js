console.log('Hello from Node.JS');

const Person = require('./person');
const person1 = new Person('John Doe', 31);

console.log(person1.greeting());