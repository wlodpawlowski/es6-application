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

//12. Callable entities:
    //12.1 Using call() and apply() methods:
    const new_array = ['a', 'b', 'c', 'd'];
    console.log(Object.prototype.toString.call(new_array));
    //12.2 Using apply() method for getting each elements (ES5):
    const math_array = [6, 0, 3, 5, 98];
    Array.prototype.push.apply(new_array, ['e', 'f', 'g', 'h']);
    console.log(new_array);
    console.log(Math.max.apply(null, math_array));
    //12.3 Using spread operator (ES6) insted apply():
    const new_date = [2019, 6, 25];
    console.log(new Date(...new_date));
    //12.4 Converting an array-like object to an Array:
    let domLinks = document.querySelectorAll('a');
    let links = Array.prototype.slice.call(domLinks);
    links.map(function (link) {
      console.log(link.href);
    });
    //12.5 Using hasOwnProperty() for checking out arguments:
    let obj_test = Object.create(null);
    console.log(Object.prototype.hasOwnProperty.call(obj_test, 'toString'));
    //12.6 Display function's name:
    function test_func() {
      console.log('Name of function: ' + test_func.name);
    }
    test_func();

    //13. New OOP Features of ES6:
    //13.1 Defining not assigning property:
    const obj_new = {};
    Object.defineProperty(obj_new, '__proto__', { value: 123 });
    console.log(Object.keys(obj_new));
    console.log(obj_new.__proto__);

    //13.2 Getting all defaults attributes of a property from the object:
    const attr_obj = {
      first : 'A',
      second : 'B',
      third : 'C'
    };
    for (let i in attr_obj) {
      console.log(Object.getOwnPropertyDescriptor(attr_obj, i));
    }

    //13.3 Using toJSON method for JSON.stringify method initializing:
    const testObject = {
      A : 'X',
      B : 'Y',
      toJSON() {
        return {
          C : 'Z',
          D : 'E',
          E : 'F'
        }
      },
      F : 'W'
    }
    console.log(JSON.stringify(testObject));

    //14.1 Using old Object.prototype.toString() for returning value of type:
    console.log(Object.prototype.toString.call(null));
    console.log(Object.prototype.toString.call([]));
    console.log(Object.prototype.toString.call({}));
    console.log(Object.prototype.toString.call(Object.create(null)));

    //14.2 Checking out type of different objects:
    console.log(JSON[Symbol.toStringTag]);
    console.log(Map.prototype[Symbol.toStringTag]);
    console.log(Math[Symbol.toStringTag]);

    //14.3 Private data of class - using constructor():
    class Countdown {
      constructor(counter, action) {
        Object.assign(this, {
          dec() {
            if (counter < 1) return;
            counter--;
            if (counter == 0) {
              action();
            }
          }
        });
      }
    }

    const countDown = new Countdown(3, () => console.log('YEP!'));
    for(let i = 0; i < 3; i++) {
      countDown.dec();
    }

    //14.4 Private data with Symbol keys:
    const _counter = Symbol('counter');
    const _action = Symbol('action');

    class Countdown2 {
      constructor(counter, action) {
        this[_counter] = counter;
        this[_action] = action;
      }

      dec() {
        if (this[_counter] < 1) return;
        this[_counter]--;
        if (this[_counter] == 0) {
          this[_action]();
        }
      }
    }

    const symbolData = new Countdown2(3, () => console.log('DONE!'));
    console.log(Object.keys(symbolData));
    console.log(Reflect.ownKeys(symbolData));
    //console.log(Reflect.ownKeys());

    //14.5 The inner names of function:
    const fac = function me(n) {
    if (n > 0) {
      return n * me(n-1);
    } else {
      return 1;
    }
  };
  console.log(fac(3));

  //15.1 Testing special API for loading different modules:
  Promise.all(
    ['Module1', 'Module2', 'Module3'].map(x => System.import(x))).then(([Module1, Module2, Module3]) => {
      console.log('Promises were called!');
      for (let i = 1; i <= 3; i++)
        console.log(Module`${i}`);
    
  //16. For-of loop construction in the ES6:

  //16.1 Simple example:
  const aircrafts = [
    'Helicopters',
    'Autogyros',
    'Glider',
    '',
    'Airplanes'
  ];
  for(const x of aircrafts) {
    if (x.length === 0) break;
    console.log(x);
  }

  //16.2 Using destructuring for iterating over elements of array:
  const space_stations = [
    'Salyut 1',
    'Skylab',
    'Kosmos 557',
    'International Space Station',
    'Tiangong 1',
    'Mir'
  ];
  for (const [order, station] of space_stations.entries()) {
    console.log(`${order}: ${station}`);
  }

  //16.3 Using destructuring for iterating over elements of map:
  const ss_history = new Map([
    ['Salyut 1', 'USSR', '1971'],
    ['Skylab', 'USA', '1973-1979'],
    ['Kosmos 557', 'USSR', '1973'],
    ['International Space Station', 'USA, Russia, Canada, EU, Japan'],
    ['Tiangong 1', 'China', '2011-2018'],
    ['Mir', 'USSR-Russia', '1986-2000']
  ]);
  for (const [station, country, year] of ss_history) {
    console.log(`${station} - ${country} - ${year}`);
  }
    
    //16.4 Using Array.from() for iterating over array-like object:
  const arrayLike = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  }

  for (const x of Array.from(arrayLike)) {
    console.log(x) //It is works fine, because we use Array.from()
  }

  //16.5 Testing simple pushing element to the array using for...of...
  const pushArray = [];
  for (const elem of [5.24, 2.42, 9.95, 7.42, 5.66]) {
    pushArray.push(() => elem);
  }
  console.log(pushArray.map(f => f()));

  //16.6 Testing a destructuring pattern for iterating:
  const desArr = ['first', 'second', 'third', 'fourth'];
  for (const [k, v] of desArr.entries()) {
    console.log(`key = ${k}, value = ${v}`);
  }

  //16.7 Testing basic iterating methods for arrays:
  console.log(Array.from(['a', 'b', 'c', 'd', 'e'].keys()));
  console.log(Array.from([3.24, 2.53, 8.53, 4.63, 2.42].values()));
  console.log(Array.from(['FE', 'SE', 'TE', 'FE'].entries()));

  //16.8 Searching elements in the array:
  console.log([0.24, 5.25, 3.42].find(x => (x/10) > 0.5));
  console.log([53, 81, 32, 44, 0].findIndex(x => (x%2) == 0));

  //16.9 Testing a new method CopyWithin() for arrays:
  const testArr = [4, 7, 3, 5, 2, 1, 0];
  console.log(testArr.copyWithin(4, 2, 3));

  //16.10 Filling array with the given value:
  let fillArr = ['NOT OK', '--', '--', '--', '--', 'NOT OK'];
  console.log(fillArr);
  fillArr.fill('OK', 1, 5);
  console.log(fillArr);
    
  //16.11 Filling array with computed values:
  console.log(Array.from(new Array(7), (x, i) => i*1.42));

  //16.12 Avoiding default spreading arrays:
  const arr_A = ['A', 'B', 'C', 'D'];
  arr_A[Symbol.isConcatSpreadable] = false;
  console.log(['E', 'F', 'G', 'H'].concat(arr_A, 'K', 'L'));

  //17. Maps & Sets:

  //17.1 Default initializing method for Maps:
  console.log('Map Section:');
  const map_1 = new Map();
  const key_1 = {};

  map_1.set(key_1, 53.66);
  console.log(map_1.get(key_1));
  console.log(map_1.has(key_1));
  map_1.delete(key_1);
  console.log(map_1.has(key_1));

  //17.2 Initializing Map with [key, values] pairs methods:
  const map_2 = new Map([
    [0, 'first'],
    [1, 'second'],
    [2, 'third'],
    [3, 'fourth']
  ]);
  console.log(map_2);

  //17.3 Initializing Set():
  const f_arr = [2, 3, 2, 5, 7, 3, 0, 7, 7, 3, 1, 9, 9];
  const unique = [...new Set(f_arr)];
  console.log('Unique set of elements:');
  console.log(unique);

  //17.4 Using WeakMap() for associating data with objects:
  const _objToListeners = new WeakMap();

  function addListener(obj, listener) {
    if (! _objToListeners.has(obj)) {
      _objToListeners.set(obj, new Set());
    }
    _objToListeners.get(obj).add(listener);
  }

  function triggerListeners(obj) {
    const listeners = _objToListeners.get(obj);
    if (listeners) {
      for (const listener of listeners) {
        listener();
      }
    }
  }

  const obj = {};
  addListener(obj, () => console.log('Hello!'));
  addListener(obj, () => console.log('My dear world!'));
  addListener(obj, () => console.log('How are you ?'));

  triggerListeners(obj);

  //17.5 Determining size of map with values:
  const det_map = new Map();
  det_map.set('first_data', true);
  det_map.set('second_data', false);
  det_map.set('third_data', true);
  console.log(det_map.size);
  det_map.clear();
  console.log(det_map.size);
    
  //17.6 Iterating over Map() entries:
  const iterate_map = new Map([
    [false, 'no'],
    [true, 'yes'],
    [true, 'yes'], 
    [false, 'no'],
  ]);

  for (const entry of iterate_map) {
    console.log(entry[0], entry[1]);
  }

  //17.7 Shorter destructuring method for iterating:
  const sh_map = new Map([
    [0, 'first_pilot'],
    [1, 'second_pilot'],
    [2, 'third_pilot']
  ]);

  for (const [key, value] of sh_map) {
    console.log(`${key} : ${value}`);
  }

  //17.8 Using standart forEach method for iterating:
  sh_map.forEach((value, key) => {
    console.log(key, value);
  });

  //17.9 Mapping a map with 3-steps method:
  const mappedMap = new Map(
    [...sh_map].map(([k, v]) => [k * 3.45, '_/' + v])
  );
  console.log(mappedMap);

  //17.10 Filtering a map with 3-steps method:
  const filteredMap = new Map(
    [...sh_map].filter(([k, v]) => k < 2)
  );
  console.log(filteredMap);

  //17.11 Combining different maps:
  const combinedMap = new Map([...iterate_map, ...sh_map]);
  console.log(combinedMap);

  //17.12 The conversion to and from JSON:
  function mapToJson(myMap) {
    return JSON.stringify([...myMap]);
  }

  function jsonToMap(myJSON) {
    return new Map(JSON.parse(myJSON));
  }

  const conv_map = new Map().set(true, 7).set({first: 5, second: 8, third: 10}, ['abc']);
  console.log(mapToJson(conv_map));
  console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));

  //17.13 Implementing functions for converting string Maps to or from objects:
  function strMapToObj(strMap) {
    const obj = Object.create(null);
    for (const [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }

  function objToStrMap(obj) {
    const strMap = new Map();
    for (const k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  const str_map = new Map().set('yes', true).set('no', false);
  console.log(strMapToObj(str_map));
  console.log(objToStrMap({yes: true, no: false}));
    });
