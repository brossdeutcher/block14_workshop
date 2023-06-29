// With a for loop, create JavaScript code that creates a new array in reverse order.

// variable for the input array
// const input = [1, 2, 3];
// const input = [1, 3, 5, 7, 9, 11];
// const input = [20, 50, 30, 60, 200];
const input = [1, -1, 2, -3, 5, -8, 13];
// variable for output array
let output = [];
// loop through input array in reverse order
for (let i = input.length - 1; i >= 0; i--) {
// for each iteration, add value to end of output array
  output.push(input[i]);
}

console.log(output);