import { fizzBuzz } from "./fizzBuzz";

test("Do fizzBuzz.", () => {

    expect(fizzBuzz(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
    expect(fizzBuzz(0)).toEqual("");
    expect(fizzBuzz(-5)).toEqual("");
    expect(fizzBuzz()).toEqual("");

})