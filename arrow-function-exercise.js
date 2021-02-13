// Arrow Functions Exercise 

// ES5 Map Callback 
// function expression 
function double(arr) {
    return arr.map(function(val) {
        return val * 2; 
    });
} 

// arrow function 
function double(arr) {
    return arr.map((val) => {
        return val * 2; 
    })
}

// arrow function shorthand (use two arrow functions in one-line) 
const double = arr => arr.map(val => val * 2); 

// Refactor the following function to use arrow functions 
// Regular function 
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  
// Arrow function 
const squareAndFindEvens = numbers => {
    let squares = numbers.map((num) => {
        return num ** 2; 
    }); 
    let evens = squares.filter((square) => {
        return square % 2 === 0; 
    }); 
    return evens; 
}

// arrow function shorthand 
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0); 