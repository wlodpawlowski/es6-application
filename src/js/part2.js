//10 Destructuring:

//10.1 Array patterns work with iterables:
let [x, y] = new Set(['a', 'b']);
console.log([x, y]);

//10.2 Failing to array desctructure:
//console.log([] = null);

//10.3 Property value shorthand:
let {x1, y1, z1} = {x1: 45, y1: 78, z1: 96};
console.log({x1, y1, z1});

//10.4 Assigning to more just variables:
const obj = {};
({ foo: obj.prop } = { foo: 123 });
console.log(obj);

const arr = [];
({ bar1: arr[0], bar2: arr[1], bar3: arr[2], bar4: arr[3], bar5: arr[4] } = { bar1: 24.24, bar2: 89.23, bar3: 5.24, bar4: 2.24, bar5: 6.25 });
console.log(arr);

//10.5 Using split string method for spliting string to the array element:
function splitString(stringToSplit, separator) {
  let arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: ' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

let tempestString = 'Oh brave new world that has such people in it.';
let monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
let space = ' ';
let comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

//10.6 forEach() and destructuring:
const des_items = [
  { word: 'A', count: 0 },
  { word: 'B', count: 1 },
  { word: 'C', count: 2 },
  { word: 'D', count: 3 }
];

des_items.forEach(({word, count}) => {
  console.log(word + ' : ' + count);
});

//10.7 Transforming maps:
const map0 = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
  [4, 'd'],
  [5, 'e']
]);

const map1 = new Map(
  [...map0].map(([k, v]) => [k*2, '_' + v])
);

console.log(map1);

//10.8 Required parameters:
function mandatory() {
  throw new Error('Missing parameter');
}

function testMissing(mustBeProvided = mandatory()) {
  return mustBeProvided;
}

console.log(testMissing(0.245, 5.356));
//console.log(testMissing());

//10.9 Three approaches for enforcing maximum arity:

//1) First method with help ...args:
function arityFirst(...args) {
  if (args.length > 3) {
    throw new Error('You provided more parameters than necessaryli!');
  }
  console.log(args);
}

arityFirst(2, 3, 2);
//arityFirst(5, 6, 7, 8);

//2) Second method with help empty operator:
function aritySecond(x, y, ...empty) {
  if (empty.length > 0) {
    throw new Error('Empty has elements');
  }
  console.log(x + ' : ' + y);
}

//aritySecond(4, 5, 6, 8, 9);

//3) Third method with help sentinel variable:
const OK = Symbol();
function arityThird(x, y, arity=OK) {
  if (arity !== OK) {
    throw new Error('You provided third variable. It\'s an error!');
  }
  console.log(x, y);
}

arityThird(2, 3);
//arityThird(5, 7, 3);

//10.10 Using rest operator for arrays:
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd', 'e', 'f', 'g'];

arr1.push(...arr2);
console.log(arr1);

//11. Callable entities:

//11.1 Access the value of of this in some other way:
var $button = $('#first-btn');
$button.on('click', function() {
  this.classList.toggle('clicked');
});

var $button2 = $('#second-btn');
$button2.on('click', event => {
  event.target.classList.toggle('clicked');
});


//12.1 Methods of class defition:
class C {
  get foo() {}
  set bar(foo) {}
}

let getter = Object.getOwnPropertyDescriptor(C.prototype, 'foo').get;
let setter = Object.getOwnPropertyDescriptor(C.prototype, 'bar').set;
console.log(getter.name);
console.log(setter.name);

//12.2 Checking-out callable function:
function realFunction() {
  if (new.target !== undefined) {
    throw new Error('Can\'t be invoked via `new`');
  }
}

realFunction();

//13. New OOP features in the ES6:

//13.1 New method assign()
const testObject = {
  A: 'first',
  B: 'second',
  C: 'third'
}
Object.assign(testObject, {
  D: 'fourth',
  E: 'fifth',
  F: 'sixth'
});
console.log(JSON.stringify(testObject));

//13.2 Adding methods to the object:
class someClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

console.log(someClass);

Object.assign(someClass.prototype, {
  firstMethod(ar1, ar2) {
    console.log(`${ar1} : ${ar2}`);
  },
  secondMethod() {
  }
});

console.log(someClass);

//13.3 More precisely operator Object.is() for comparing properties:
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, +0));

//13.4 Using Object.is() instead indexOf() method for more precisely searching elements of arrays:
function myIndexOf(arr, elem) {
  return arr.findIndex(x => Object.is(x, elem));
}

console.log(myIndexOf([4.25, 2.46, 9.35, 0.42, NaN, -0, 35], NaN));

//14. Classes in the ES6:

//14.1 Creation a new standart class in the ES6:
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
  toString() {
    return super.toString() + ' in ' + this.color;
  }
}

//Assigning new classes:
const cp = new ColorPoint(8.24, 56.15, 'purple');
console.log(cp.toString());
console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);

//14.2 Class expressions:
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
}

const inst = new MyClass;
console.log(inst.getClassName());

//14.3 Using getters and setters:
class getSetClass {
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: ' + value);
  }
}

const instClass = new getSetClass();
console.log(instClass.prop = 'data');
instClass.prop;

//14.4 Using generator methods:
class IterableArguments {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (const arg of this.args) {
      yield arg;
    }
  }
}

for (const x of new IterableArguments('A', 'B', 'C', 'D', 'E')) {
  console.log(x);
}

//14.5 Using subclassing build-in constructors:
class Stack extends Array {
  get top() {
    return this[this.length - 1];
  }
}

let stack = new Stack();
stack.push('world');
stack.push('hello');
console.log(stack.top);
console.log(stack.length);

//15.1 Using species pattern for declaring constructors:
function isObject(value) {
  return (value !== null && (typeof value === 'object' || typeof value === 'function'));
}

function isConstructor(x) {
  //...
}

function SpeciesContructor(O, defaultConstructor) {
  const C = O.contructor;
  if (C == undefined) {
    return defaultConstructor;
  }
  if (!isObject(C)) {
    throw new TypeError();
  }
  const S = C[Symbol.species];
  if (S === undefined || S === null) {
    return defaultConstructor;
  }
  if (!isConstructor(S)) {
    throw new TypeError();
  }
  return S;
}

//16. Modules in the ES6:

//16.1 Named exports of modules:
requirejs(["modules/trygonometric", "modules/output"], function() {
  console.log(`cos(0.42563) = ${cosinus(0.42563)};`);
  console.log(`tg(1.64146) = ${tangent(1.64164)};`);
  console.log(`ctg(2.34624) = ${cotangent(2.34624)};`);
  console.log(simpleOutput('Gregory'));
})
