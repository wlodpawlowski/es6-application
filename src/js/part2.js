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

    //14.1 Using old Object.prototype.toString() for returning value of type:
    console.log(Object.prototype.toString.call(null));
    console.log(Object.prototype.toString.call([]));
    console.log(Object.prototype.toString.call({}));
    console.log(Object.prototype.toString.call(Object.create(null)));

    //14.2 Checking out type of different objects:
    console.log(JSON[Symbol.toStringTag]);
    console.log(Map.prototype[Symbol.toStringTag]);
    console.log(Math[Symbol.toStringTag]);
    
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

    //14.5 The inner names of function:
    const fac = function me(n) {
    if (n > 0) {
      return n * me(n-1);
    } else {
      return 1;
    }
  };
  console.log(fac(3));
  });
}
