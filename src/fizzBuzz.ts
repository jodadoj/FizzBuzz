export function fizzBuzz(input = 0): string {
  if (input <= 0) {
    return '';
  }
  const finalResult = [];
  for (let current = 1; current <= input; current++) {
    if (current % 3 === 0 && current % 5 === 0) {
      const result = 'FizzBuzz, ';
      finalResult.push(result);
    } else if (current % 3 === 0) {
      const result = 'Fizz, ';
      finalResult.push(result);
    } else if (current % 5 === 0) {
      const result = 'Buzz, ';
      finalResult.push(result);
    } else {
      const result = String(current) + ', ';
      finalResult.push(result);
    }
  }
  const finalString = finalResult.join('');
  return finalString.slice(0, -2);
}
