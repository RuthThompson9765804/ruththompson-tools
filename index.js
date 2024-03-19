const { performance } = require('perf_hooks');

// Function to generate a FizzBuzz sequence up to a given limit
function generateFizzBuzzSequence(limit) {
  const sequence = [];
  for (let i = 1; i <= limit; i++) {
    let value = '';
    if (i % 3 === 0) value += 'Fizz';
    if (i % 5 === 0) value += 'Buzz';
    sequence.push(value || i);
  }
  return sequence;
}

// Function to check if a number is divisible by another number
function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

// Function to count the occurrences of Fizz, Buzz, and FizzBuzz in a sequence
function countFizzBuzzOccurrences(sequence) {
  const counts = { Fizz: 0, Buzz: 0, FizzBuzz: 0 };
  sequence.forEach(item => {
    if (item === 'Fizz') counts.Fizz++;
    else if (item === 'Buzz') counts.Buzz++;
    else if (item === 'FizzBuzz') counts.FizzBuzz++;
  });
  return counts;
}

module.exports = {
  generateFizzBuzzSequence,
  isDivisibleBy,
  countFizzBuzzOccurrences
};
