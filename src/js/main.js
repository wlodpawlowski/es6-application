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