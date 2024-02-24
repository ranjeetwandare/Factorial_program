function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Test the factorial function
const num = 6;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
