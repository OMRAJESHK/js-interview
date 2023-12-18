/* Closures 
a function ran, the function executed. It's never going to run again
but it's going to remember that there are references to those variable.
so the childscope always has access to parent scope
*/

/* Currying */
const multiply = (a) => (b) => a * b;
const multiplyBy3 = multiply(3);
console.log(multiplyBy3(4));

/* Composing - 
act of puuting 2 functions to form a 3rd function, 
where the output of one function is the input of the other */

const compose = (f, g) => (a) => f(g(a));
const f = (value) => console.log("final result - f", value);
const g = (value) => value + "...!";
const a = compose(f, g);
a("Raj"); // Output - final result - f Raj...!

/* Pure Function - 
Function that doesnot have any side effect and always return same resuts when same arguments are passed
*/

function impureFunction() {
  console.log(
    "This is the example of impure function, because it's affecting the output"
  );
}
impureFunction();
