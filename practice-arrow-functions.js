// Practice arrow functions 

// function expression (no parameter) 
const arrowFunction = () => {
    // return 
    return 'I was called'; 
}
arrowFunction(); // 'I was called' 

// function expression (no parameter) 
const anotherArrowFunction = () => {
    return 'Another arrow function'; 
}
anotherArrowFunction(); // 'Another arrow function' 

// function expression with 2 arguments 
const moreArrowFunction = (arg1, arg2) => {
    // return template literal 
    return `${arg1} ${arg2}`; 
}
moreArrowFunction('Hey', 'You!'); // 'Hey You!' 

// arrow function with implicit return (just 1 expression; without curly braces around function body 
const square = n => n ** 2; 
square(4); // 16 

// Example 1
[1,2,3,4].map(function(n) {
    // return 
    return n * n; 
}).reduce(function(sum, n) {
    // return 
    return sum + n; 
}, 0); 

    // Arrow function 
    [1,2,3,4].map(n => n * n).reduce((sum, n) => (sum + n), 0); // 30

// Example 2
const array = [1,2,3]; 
array.map(function(num) {
    return num * 2; 
}); 
array; // [2,4,6] 

    // Arrow function 
    const array = [1,2,3]; 
    // arr.map(() => )
    array.map((num) => {
        return num * 2; 
    })
    array; // [2,4,6]

    // Arrow function (implicit return) 
    const array = [1,2,3]; 
    // arr.map(n => n * 2) 
    array.map(num => num * 2); 

// Example 3
// Arrow function with ternary operator 
const negativeToZero = number => (number <= 0 ? 0 : number); 

// Example 4
// An object literal inside an inline arrow function triggers a syntax error:
// const array = [1, 2, 3];
// throws SyntaxError!
// array.map(number => { 'number': number });

// JavaScript considers the curly braces a code block, rather than an object literal.
// Wrapping the object literal into a pair of parentheses solves the problem:
const array = [1, 2, 3];
// Works!
array.map(number => ({ 'number': number }));

// Example 5 (be aware of excessive nesting) 
myButton.addEventListener('click', () => {
    fetch('/items.json')
      .then(response => response.json())
      .then(json => {
        json.forEach(item => {
          console.log(item.name);
        });
    });
});

    // => solution is to break down each function that holds separate variables
    const readItemsJson = json => {
        json.forEach(item => console.log(item.name)); 
    }
    const handleButtonClick = () => {
        fetch('/items.json')
            .then(response => response.json())
            .then(readItemsJson); 
    }; 
    myButton.addEventListener('click', handleButtonClick); 


// TIP: The object literal syntax { prop: 'value' } is similar to a code of block { }. So when the object literal is placed inside an inline arrow function, you need to wrap it into a pair of parentheses: () => ({ prop: 'value' }).

// Practice 6
function addToTen(num) {
    return 10 + num; 
}
addToTen(20); // 30 

    const addToTen = num => 10 + num; 
    const addToTen = (num) => 10 + num; 
    addToTen(20); // 30 

// Practice 7 
function divideUs(num1, num2) {
    return num1/num2; 
}
divideUs(10, 2); // 5 

    const divideUs = (num1, num2) => {
        return num1/num2; 
    }
    const divideUs = (num1, num2) => num1/num2; 
    const divideUs = ((num1, num2) => num1/num2); 
    divideUs(10, 2); // 5 

// Practice 8 
function printMyName() {
    let myName = 'Ashley'; 
    console.log(myName); 
}
printMyName(); // 'Ashley' 

    const printMyName = () => {
        let myName = 'Ashley'; 
        console.log(myName); 
    }
    printMyName(); // 'Ashley' 