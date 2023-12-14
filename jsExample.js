// Variable Env

function two(){
    var isValid;
    console.log("Variable Env",isValid) // 'someName' throws referenceError 
   }
   
   function one(){
    var isValid = true;
    var someName = "Rajesh"
    two()
   }
   var isValid = false;
   one()
   
   // JS Exercise 1
   function weird(){
    console.log("before global",window.height) // it's 50 not 'undefined' --> very weird
    height = 50; // not used var let or const so assigns to window
    console.log("after global",window.height)
    return height;
   }
   weird()
   
   // Function scope vs block scope exercise 1
   
   if(5>4){
    var secret = "qwerty!"
   }
   console.log("secret-->",secret) // output = qwerty because var is function scope
   
   // Function scope vs block scope exercise 2
   
   function loop(){
    for(var i=0;i<5;i++){
     console.log(i)
    }
    console.log("Function scope vs block scope exercise-->",i)
   }
   loop()