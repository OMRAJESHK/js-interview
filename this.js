// Example - 1

console.log("outer", this);

const obj1 = {
  someName: "Rajesh Kanna",
  getName() {
    console.log("inner", this);
  },
};

obj1.getName();

// Example - 2
function a() {
  console.log("Example a()", this);
}
function b() {
  "use strict";
  console.log("Example  b()", this);
}

a();
b();
// ES Modules by default have use strict

/* Why 'this' in JS
1. Gives methods access to object
2. Execute same code for multiple objects
*/
const ob2 = {
  name: "rajesh Kapoor",
  sing() {
    return `la la la + ${this.name}`;
  },
};

console.log("the Object2", ob2.sing());

// 2. Execute same code for multiple objects

function importantPerson() {
  return this.fname;
}
const fname = "Rajesh kumar";

console.log("importantPerson - Global", importantPerson());
const thisObj1 = { fname: "Obj1 Rajesh", importantPerson };
console.log("importantPerson - Obj1 =>", thisObj1.importantPerson());

const thisObj2 = { fname: "Obj2 Rajesh", importantPerson };
console.log("importantPerson - Obj2 =>", thisObj2.importantPerson());

// Exercise 1
const exercise_a = function () {
  console.log("exercise_a outer =>", this);
  const exercise_ab = function () {
    console.log("exercise_ab inner =>", this);
    const exercise_ac = {
      sing() {
        console.log("exercise_ac sing =>", this);
      },
    };
    exercise_ac.sing();
  };
  exercise_ab();
};

exercise_a();

// Exercise 2
const exercise_b = {
  name: "Billy",
  sing() {
    console.log("exercise_b sing", this);
    var anotherSing = function () {
      console.log("exercise_banotherSing sing", this); // Problem -> this refers to window, not exercise_b
    };

    anotherSing();
  },
};
exercise_b.sing();
// Solution 1 - use Arrow function inside
const exercise_ba = {
  name: "Billy",
  sing() {
    console.log("exercise_ba sing", this);
    var anotherSing = () => {
      console.log("exercise_baanotherSing sing", this);
    };
    anotherSing();
  },
};
exercise_ba.sing();
// Solution 2 - use 'use strict'
const exercise_bb = {
  name: "Billy",
  sing() {
    console.log("exercise_bb sing", this);
    var anotherSing = function () {
      console.log("exercise_bbanotherSing sing", this);
    };
    return anotherSing.bind(this);
  },
};
exercise_bb.sing()();

// Solution 3 - use 'use strict'
const exercise_bc = {
  name: "Billy",
  sing() {
    console.log("exercise_bc sing", this);
    const self = this;
    var anotherSing = function () {
      console.log("exercise_bcanotherSing sing", self);
    };

    anotherSing();
  },
};
exercise_bc.sing()();
