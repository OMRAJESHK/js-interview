// Pure Functions Exercise
// Pure function should have a) no side effect. b) input -->output

// Exercise 1
// here function a is not pure function as it's affecting outside browser output

// What's referential Transparency
// lets say there's a function 

/*
 Pure Functional Programming should include
 1. do one task only
 2. return statement
 3. pure function
 4. no shared state
 5. Immutable state
 6. Composable
 7. Predictable
*/

const sum = (a,b) => a+b;
// here sum(1,2) can be replaced with value 3. since that's what it returns. 
function a(){
    console.log("Rajesh")
}


// Idempotence
/*
Idempotence means making the code Predictable, if a function returns same thing the called 1000 times, then it's Idempotence
*/

/*
Immutability - not changing the data/state
*/

/*
clusures
*/
const closure = function(){
 let count = 0;
 return function(){
  count++;
  return count;
 }
}
const incrementFn = closure()
incrementFn()
incrementFn()
incrementFn()
incrementFn() //output 4


/*
curring exercise 
*/
const multiply = (a,b)=>a*b;
const curriedMultiply = a => b =>a*b;
const curriedMultiplyBy5 = curriedMultiply(5);


curriedMultiplyBy5(4)


/*
Partial Application
*/

const multiplyP = (a,b,c) => a*b*c;
const partialMultiplyBy5 = multiplyP.bind(null,5)
console.log("Partial Application",partialMultiplyBy5(4,10));

const user = {
    name:"Rajesh",
    active:true,
    cart:[],
    purchase:[]
}


// Implement cart features:
// 1. Add Item to cart
// 2. Add 3% tax to item in cart
// 3. Buy Item : cart --> purchases
// 4. Empty cart

// Bonus
// accept refunds
// Track user history
