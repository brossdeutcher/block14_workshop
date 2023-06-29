// Create JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// loop to iterate every number between 1 and 100
for (let i = 1; i <= 100; i++) {
  // if multiple of 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    // print "FizzBuzz"
    console.log(`FizzBuzz`);
  // if multiple of 3
  } else if (i % 3 === 0) {
    // print "Fizz"
    console.log(`Fizz`);
  // if multiple of 5
  } else if (i % 5 === 0) {
    // print "Buzz"
    console.log(`Buzz`);
  } else {
    // else print number
    console.log(i);
  }
}