// Hoisting exercise 1

a()
function a(){
 console.log("hi")
}
function a(){
 console.log("bye")
}

// Hoisting exercise 2

var favouriteFood = "grapes";

var foodThoughts = function(){
 console.log("Original favourite food: "+favouriteFood);
 var favouriteFood = "sushi";
 console.log("New favourite food: "+ favouriteFood)
}
foodThoughts()

// Hoisting exercise 3

//getName(); // we get getName is not a function error because in creation phase it's assigned to undefined
var getName = function(){
 console.log("Rajesh")
}