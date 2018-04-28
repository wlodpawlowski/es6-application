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
  });
}