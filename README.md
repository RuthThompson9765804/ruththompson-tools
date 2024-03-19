# Ruththompson-tools

A Node.js module providing utility functions for dealing with the Ruththompson-tools problem.

## Installation

You can install this module via npm: `npm install ruththompson-tools`

## Usage

```javascript
const fizzbuzz = require('fizzbuzz-util');

// Generate FizzBuzz sequence up to 15
const sequence = fizzbuzz.generateFizzBuzzSequence(15);
console.log(sequence);

// Check if 15 is divisible by 3
console.log(fizzbuzz.isDivisibleBy(15, 3));

// Count occurrences of Fizz, Buzz, and FizzBuzz in the sequence
const counts = fizzbuzz.countFizzBuzzOccurrences(sequence);
console.log(counts);
```
