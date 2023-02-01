export function fizzBuzz(input = 0): string {
  //if no entry or invalid range or N
  if (input <= 0 || typeof input !== 'number') {
    console.log('Please enter a number above zero. Inputs will be rounded up.');
    return '';
  }
  const finalResult = [];
  for (let current = 1; current <= input; current++) {
    //if divisible by both
    if (current % 3 === 0 && current % 5 === 0) {
      const result = 'FizzBuzz, ';
      finalResult.push(result);
    } else if (current % 3 === 0) {
      //otherwise check divisble by either
      const result = 'Fizz, ';
      finalResult.push(result);
    } else if (current % 5 === 0) {
      const result = 'Buzz, ';
      finalResult.push(result);
    } else {
      //finally just print the number if n
      const result = String(current) + ', ';
      finalResult.push(result);
    }
  }
  const finalString = finalResult.join('');
  return finalString.slice(0, -2);
}
