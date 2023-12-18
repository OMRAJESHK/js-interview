// groupBy Example
const employees = [
  { id: 1, name: "Rajesh", salary: 30000 },
  { id: 2, name: "Suresh", salary: 40000 },
  { id: 3, name: "Kumar", salary: 22000 },
  { id: 4, name: "Rajiv", salary: 10000 },
];

const empGrps = Object.groupBy(employees, (employee) => employee.name);
console.log(empGrps);

// 'with' Method Example
const withEmployees = employees.with(3, {
  id: 3,
  name: "Kanna",
  salary: 50000,
});
console.log("with Example", withEmployees);

// 'at' Method Example
const atExample = employees.at(1);
console.log("atExample", atExample);

// 'fill' Method Example
const fillExample = employees.fill({}, 1, 3);
console.log("fillExample", fillExample);

// 'flat' method Example
const array = [1, [12, 22], [[111, 222]]];
const flatExample1 = array.flat();
const flatExample2 = array.flat(Number.POSITIVE_INFINITY);
console.log("flatExample", flatExample1, flatExample2);

// 'findLast' Method Example
const array1 = [1, 2, 3, 4, 5];
const findLastExample = array1.findLast((n) => n < 3);
console.log("findLastExample", findLastExample);

// 'reduceRight' Method Example
const array2 = [1, 2, 3, 4, 5];
const reduceRightExample = array2.reduceRight((n) => n < 3);
console.log("reduceRightExample", reduceRightExample);

// forEach doesnot return any value
// map always returns something and is a pure function
const mapFilterReduceArray = [1, 2, 3];
const mapExample = mapFilterReduceArray.map((num) => num * 2);
const mapExample2 = mapFilterReduceArray.map((num) => num > 2);
console.log("mapExample", mapExample, mapExample2);

// filter just returns the items based on the condition
const filterExample = mapFilterReduceArray.fill((num) => num === 2);
console.log("filterExample", mapExample, mapExample2);

// reducer
const reduceArray = [1, 2, 3, 4];
const reducerExample = reduceArray.reduce(
  (accumulator, number) => accumulator + number,
  0
);
console.log("reducerExample", reducerExample);
