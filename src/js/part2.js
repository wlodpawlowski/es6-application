export function part2_function() {
  window.addEventListener('load', function() {
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
  });
}
