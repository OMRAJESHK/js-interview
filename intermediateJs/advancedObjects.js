// reference type
console.log("[] === [] is false");
const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };
console.log("referenceExample", obj3 === obj1); // false

// context

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} and I'm ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Wohoo I'm a ${this.name}`);
  }
}

const wizard1 = new Wizard("Rajesh", "healer");
const wizard2 = new Wizard("Kanna", "Shooter");
console.log("instantiationExample", wizard1, wizard2);

/* Creating objects in JavaScript (4 Different Ways) */
// 1. Creating object with a constructor
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}
// New keyword to create an object
let car = new vehicle("GT", "BMW", "1998cc");
console.log("constructorExample", car);

// 2. Creating object using object literals
let car1 = { name: "GT", maker: "BMW", engine: "1998cc" };
console.log(car1.name);

// 3. Creating object with Object.create() method
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};
const me = Object.create(coder);
me.name = "Mukul";
me.isStudying = true;
me.printIntroduction();

// 4. Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car2 = new Vehicle("GT", "BMW", "1998cc");
