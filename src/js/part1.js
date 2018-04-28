export function part1_function() {
    //Arrow functions:
    const sides = [3.434, 2.353, 6.743, 45.43];
    console.log('Square of shape = ' + sides.map(x => x * x));
    //Multiple return values via objects:
    const obj = {
      foo: 123
    };
    const {writable, configurable} = Object.getOwnPropertyDescriptor(obj, 'foo');
    console.log(writable, configurable);
    //For-of loop construction:
    const human = ['head', 'shoulders', 'body', 'hands', 'legs', 'face', 'hairs', 'eyes'];
    for(const part of human) {
      console.log(part + '\n');
    }
    for(const [index, part] of human.entries()) {
      console.log(index + ' = ' + part);
    }
    //Handling named parameters:
    /*
    function selectEntries({start = 0, end = -1, step = 1}) {
      return Math.sqrt(start + end * step);
    }
    console.log(selectEntries());
    //Handling optional parameter:
    function selectrEntries2({start = 0, end = -1, step = 1} = {}) {
      return start - end * step;
    }
    console.log(selectrEntries2());*/
    //From arguments to rest operators:
    function extractPhysicalPartcle(...args) {
      console.log('Physical parameters for extraction function:');
      for(const arg of args) {
        console.log(arg);
      }
    }
    extractPhysicalPartcle('HG_4253', 'sxjsk98', 424.5313, 9835.5355, 'AF', 'UIF-32');
    //From apply() to the spread operator():
    console.log(Math.max(...[0.35, 0.45, 2.32, 5.35]));
    const A = ['Marcus', 'Gerenho', 'Franc'];
    const B = ['Jeronimo', 'Valentino', 'Urszula'];
    const C = ['Hugo', 'Shelbey', 'David'];
    console.log(A.push(...B));
    //From concat() to the spread operator:
    console.log([...A, ...B, ...C]);
    //From function expression in pbject literals to method definitions:
    const museum = {
      gen : 3589,
      empl : 35,
      fin : '$123000',
      getAmount() {
        console.log('General amount of exhibits = ' + this.gen);
      },
      finance() {
        console.log('All finances invested for museum = ' + this.fin);
      },
      employes() {
        console.log('All workers in the museum = ' + this.empl);
      }
    }
    museum.getAmount();
    museum.finance();
    museum.employes();
    //From constructors to classes:
    class usaPassport {
      constructor(name, surname, birth, pl_birth, nationality, start_date, end_date, pcn) {
        this.name = name;
        this.surname;
        this.birth = birth;
        this.pl_birth = pl_birth;
        this.nationality = nationality;
        this.start_date = start_date;
        this.end_date = end_date;
        this.pcn = pcn;
      }
      addNewCitizen() {
        console.log('Name: ' + this.name);
        console.log('Surname: ' + this.surname);
        console.log('Date of birth: ' + this.birth);
        console.log('Nationality: ' + this.nationality);
        console.log('Issued on: ' + this.start_date);
        console.log('Expires on: ' + this.end_date);
        console.log('Passport code number: ' + this.pcn);
      }
    }
    var Frank = new usaPassport(
      'Frank',
      'Sinatra',
      '1965-05-08',
      'Washington DC',
      'USA',
      '2010-01-01',
      '2020-01-01',
      'C03005988'
    );
    console.log(Frank.addNewCitizen());
    //Derived classes:

    class Employee extends usaPassport {
      constructor(title, salary) {
        super(name);
        this.title = title;
        this.salary = salary;
      }
      describe() {
        console.log(super.addNewCitizen() + '\n' + this.title + '\n' + this.salary);
      }
    }
    var frank_worker = new Employee('CTO', '$35000');
    frank_worker.describe();
    console.log(frank_worker);
    //From Objects to Maps:
    const map = new Map();
    function countWords(word) {
      const count = map.get(word) || 0;
      map.set(word, count + 1);
    }
    countWords('astonomy');
    //New array methods:
    const arr = ['a', 'b', 'c', 4244.53, NaN, 23.3224];
    console.log(arr.indexOf(NaN));
    console.log(arr.findIndex(x => Number.isNaN(x)));
    //Filling elements of array:
    const arr4 = new Array(4).fill('new_element');
    console.log(arr4);
    var octalNumber = 0o10;
    var hexaNumber = 0xFF;
    var binaryNumber = 0b11;
    console.log('Number methods:');
    console.log('Octal number = ' + octalNumber);
    console.log('Hexadecimal number = ' + hexaNumber);
    console.log('Binary number = ' + binaryNumber);
    //New Number methods:
    console.log('Epsilon number = ' + Number.EPSILON);
    console.log('Is it integer -24.42 ? - ' + Number.isInteger(-24.42));
    console.log('Is it integer 85 ? - ' + Number.isInteger(85));
    console.log('Is it safe integer 35838 ? - ' + Number.isSafeInteger(35838));
    console.log('Min safe integer = ' + Number.MIN_SAFE_INTEGER);
    console.log('Max safe integer = ' + Number.MAX_SAFE_INTEGER);
    console.log('Is it NaN ? #?! - ' + Number.isNaN('#?!'));
    console.log('Is it finite number 300/0 ? - ' + Number.isFinite(300/Infinity));
    console.log('Parse float number 35.63 as integer = ' + Number.parseInt(35.63));
    console.log('Parse integer number 5 as float = ' + Number.parseFloat(5));
    console.log('Sign of number 42.53 = ' + Math.sign(42.53));
    console.log('Removing decimal fraction from 3.45 = ' + Math.trunc(3.45));
    console.log('Logarithm to base 10 from 100 = ' + Math.log10(100));
    console.log('Pythagoras theorem from a = 5, b = 14 = ' + Math.hypot(5, 14));
    console.log('Parsing number as hexadecimal = ' + Number.parseInt('0xFF', 0));
    console.log('Avoiding rounding errors: ' + epsEqu(0.1 + 0.2, 0.3));
    function epsEqu(x, y) {
      return Math.abs(x - y) < Number.EPSILON;
    }
    console.log('The cube root = ' + Math.cbrt(64));
    console.log('Precisely logarithmic calculation = ' + Math.log1p(1e-16));
    console.log('Logarithm from 42 to base 2 = ' + Math.log2(42));
    console.log('Rounding number to 32-bits floating number 24.36 = ' + Math.fround(24.36));
    console.log('Multiplying two numbers and return lower 32 bits = ' + Math.imul(16, 4));
    console.log('Counts the leading zero bits in the number 4 = ' + Math.clz32(4));
    console.log('Hyperbolic sine 0.0035 = ' + Math.sinh(0.0035));
    console.log('Hyperbolic cosine 0.0035 = ' + Math.cosh(0.0035));
    const first = 'Wlodzimierz';
    const last = 'Pavlov';
    const age = '22 years';
    const position = 'Junior Front-End Developer';
    const firstSymbol = Symbol('First Symbol');
    const secondSymbol = Symbol('Second Symbol');
    const my_key = Symbol();
    const key_obj = {};
    const out_symbol = Symbol('New Symbol');
    const new_symbol = Symbol();
    const wrapper = Object(new_symbol);
    const wr_symbol = Symbol('yes');
    const wr_string = new String('str');
    const wr_obj = {
      [wr_symbol]: 'I\'m unwrapped symbol!',
      str: 'I\'m unwrapped string!'
    }
    const wr_symbol_2 = Object(wr_symbol);
    key_obj[my_key] = 2524.42;
    let output = [
      'Hyperbolic tangent 1.24 = ' + Math.tanh(1.24),
      'Inverse hyperbolic sine 0.0035 = ' + Math.asinh(0.0035),
      'Inverse hyperbolic cosine 0.0035 = ' + Math.acosh(0.0035),
      'Inverse hyperbolic tangent 1.24 = ' + Math.atanh(1.24),
      'Pythagoras theorem = 4^2 + 8^3 = ' + Math.hypot(4, 8),
      'Single code escapes = ' + '\u{1F680}',
      'Two code escapes = ' + '\uD83D\uDE80',
      `Hello. My name is ${first} ${last}. I've a ${age} old. I'm a ${position} in the Nitro Digital Corporation`,
      `It's a multiline strings.
      So, I'll continue guide about this file...
      Do you busy ?
      Nope, it's a good news.
      Well, it's meaning, we can continue our walking!
      `,
      [...'Well Done!'],
      'Starts with journey: ' + 'Great Journey!'.startsWith('our', 7),
      'Ends with journey: ' + 'Great Journey!'.endsWith('ney', 13),
      'Include journey: ' + 'Great Journey!'.includes(' ', 6),
      'just do it!'.repeat(4),
      firstSymbol,
      'Converted symbol to the string: ' + secondSymbol.toString(),
      'Returned object property: ' + key_obj[my_key],
      `Output symbol with explicitly conversion: ${String(out_symbol)}`,
      //23.45 + Symbol(): Display TypeError...
      'Type of symbol: ' + typeof new_symbol,
      'Type of wrapped symbol: ' + typeof wr_symbol_2,
      'Value of unwrapped symbol property: ' + wr_obj[wr_symbol_2],
      'Type of wrapped string: ' + typeof wr_string,
      'Value of unwrapped string: ' + wr_obj[wr_string]
    ];
    output.forEach(out => {
      console.log(out);
    });
    for (const ch of 'San-Francisco') {
      console.log(ch);
    }
    for (const ch of 'x\uD83D\uDE80y') {
      console.log(ch.codePointAt(0).toString(16));
    }
    const reg_sym = Symbol.for('Hello everybody!');
    console.log(Symbol.keyFor(reg_sym));
    console.log(Symbol.keyFor(Symbol.iterator));

    //8. Template literals:
    console.log('8. Template literals:');
    const fName = 'Margaret';
    console.log(`Good evening, ${fName}! 
    Nice to see you again!
    How are you ?
    Whar are you doing now ?`);
    console.log(String.raw`A \tagged\ template`);
    console.log(`\${}` + `\u{58}`);
    const t_str = `AFTER
    END`;
    console.log(t_str === 'AFTER\nEND');
    function createNumberRegExp(eng) {
      const PERIOD = eng ? String.raw`\.` : ',';
      return new RegExp(`[0-9]+(${PERIOD}[0-9]+)?`);
    }
    console.log(createNumberRegExp(','));
    console.log('Create simple query for the server:');
    let classNameQuery = 'simple-class-query';
    let domainQuery = 'usa-home-domain';
    console.log('Send query: ' + `a.${classNameQuery}[href*='//${domainQuery}/']`);
    const data = [
      { first: '<Jane>', last: 'Bond' },
      { first: 'Lars', last: '<Croft>' },
      { first: '<Jennifer>', last: 'Aniston' },
      { first: 'John', last: '<Oruel>' }
    ];

    const tmpl = addrs => `
      <table>
        ${addrs.map(addr => `
          <tr><td>${addr.first}</td></tr>
          <tr><td>${addr.last}</td></tr>
        `).join('')}
      </table>
    `;
    console.log(tmpl);

    /*
    const tmpl2 = addrs2 => html`
      <table>
        ${addrs2.map(addr2 => html`
          <tr><td>!${addr2.first}</td></tr>
          <tr><td>!${addr2.last}</td></tr>
        `)}
      </table>
    `;
    const inData = [
      { first: '<Carlos>', last: 'Fereira' },
      { first: 'Fred', last: '<Owfoul>' },
      { first: '<Anthony>', last: 'Robins' },
      { first: 'Gareth', last: '<Emery>' }
    ];
    console.log(tmpl2(inData));
    */

    const INTEGER = /\d+/;
    const decimalPoint = '.';
    const NUMBER = regex`${INTEGER}(${decimalPoint}${INTEGER})?`;
    console.log(NUMBER);
    
    function regex(tmplObj, ...substs) {
      //Static text: verbatim
      let regexText = tmplObj.raw[0];
      let i;
      let subst;
      for([i, subst] of substs.entries()) {
        if (subst instanceof RegExp) {
          regexText += String(subst);
        } else {
          regexText += quoteText(String(subst));
        }
        regexText += tmplObj.raw[i+1];
      }
      return new RegExp(regexText);
    }

    function quoteText(text) {
    return text.replace(/[\\^$.*+?()[\]{}|=!<>:-]/g, '\\$&');
    }

    // 9. Variables and scoping:

    // 9.1 let variables:
    console.log(order(0.24, 0.54));
    function order(x, y) {
      if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
      }
      console.log(tmp === x);
      return [x, y];
    }

    //9.2 const variables:
    const light_speed = 300000;
    console.log(light_speed);

    //9.3 Freezing objects:
    let default_object = {
      0 : 'A',
      1 : 'B',
      2 : true,
      3 : 4253.3313,
      4 : {
        0 : 'A',
        1 : 'B',
        2 : false
      },
      5 : 'drone',
      6 : {
        0 : 'AX',
        1 : 'BX',
        2 : 'CX'
      },
      7 : false
    }

    console.log(Object.getOwnPropertyNames(default_object['6']));
    deepFreeze(default_object);

    function deepFreeze(obj) {

      // Retrieve the property names defined on obj
      var propNames = Object.getOwnPropertyNames(obj);
    
      // Freeze properties before freezing self
      propNames.forEach(function(name) {
        var prop = obj[name];
    
        // Freeze prop if it is an object
        if (typeof prop == 'object' && prop !== null)
          deepFreeze(prop);
      });
    
      // Freeze self (no-op if already frozen)
      return Object.freeze(obj);
    }
    
    //9.4 Const in loop iterations:
    function logArgs(...args) {
      for (const [index, elem] of args.entries()) {
        const message = index + '. ' + elem;
        console.log(message);
      }
    }

    logArgs('USA', 'United Kingdom', 'Russia', 'Poland', 'Spain', 'Germany');

    //9.5 insertAdjacentHTML:
    var details = document.getElementsByClassName('details-block');
    details[0].insertAdjacentHTML('beforebegin', '<h3>Simple details block</h3>');
    details[0].insertAdjacentHTML('afterbegin', '<summary>Copyright 2015-2018.</summary>');
    details[0].insertAdjacentHTML('beforeend', '<p>All content and graphics on this web site are the property of the company Refsnes Data.</p>');
    details[0].insertAdjacentHTML('afterend', '<blockquote cite="https://www.brainyquote.com/quotes/elon_musk_567268>Mars is the only place in the solar system where it\'s possible for life to become multi-planetarian.</blockquote>');

    //9.6 Using pre-iteration bindings:
    const entries_btn = [
      ['yes', 'ja'],
      ['no', 'nein'],
      ['perhaps', 'vielleich']
    ];
    const entries_cont = document.getElementsByClassName('pre-iteration')[0];

    for (const [source, target] of entries_btn) {
      entries_cont.insertAdjacentHTML('beforeend', `<div><a id="${source}" href="#">${source}</a></div>`);
      document.getElementById(source).addEventListener('click', (event) => {
        event.preventDefault();
        alert(target);
      });
    }

    //9.7 Special archiver function for loging entries of temperature:
    function Archiver() {
      let temperature = null;
      let archive = [];

      Object.defineProperty(this, 'temperature', {
        get() {
          console.log('get!');
          return tempareture;
        },
        set(value) {
          temperature = value;
          archive.push({ val: temperature });
        }
      });

      this.getArchive = function() {
        return archive;
      }
    }

    let arc = new Archiver();
    for (let i = 0; i < 10; i++) {
      arc.temperature = i * Math.sqrt(0.352/0.56);
    }
    console.log('Temperature archive:');
    console.log(arc.getArchive());
    //10. Desctructuring data:

    //10.1 Desctructuring simple array:
    const [x, y] = ['a', 'b', 'c'];
    console.log([x, y]);

    //11. Parameter handling:

    //11.1 Default parameters:
    console.log('Default parameters section');
    function def_param(a, b=34.56, c=Math.PI * 23) {
      console.log([a, b, c]);
    }

    def_param(2.24, 953, 0.24);
    def_param(34.45);
    def_param();

    //11.2 Rest parameters:
    function rest_function(A, B, ...C) {
      console.log(A, B, C);
    }

    rest_function(41.31, 98.24, 0.42, 23.52, 98.535, 87.424);
    rest_function(3, 6, 0.942);
    rest_function();

    //11.3 Named parameters with desctructuring:
    function selectEntries({start = 0, end = -1, step = 1} = {}) {
      console.log(`${start}, ${end}, ${step}`);
    }

    selectEntries({ start: 3.5, end: 15.5, step: 1.5 });
    selectEntries({ step: 5 });
    selectEntries({});
    selectEntries();

    //11.4 Referring to other parameters in default values:
    function def_other(a=6, b=c, c=a/b) {
      console.log(a + ' : '+  b + ' : ' + c);
    }

    def_other(4, 6);
    def_other(5);
    def_other();

    //11.5 Rest parameters:
    function logAllParamaters(...args) {
      for (const arg of args) {
        console.log(arg);
      }
    }

    logAllParamaters('first', 'second', 'third', 'fourth', 'final');

  //12. Callable entities:

  //12.1 Arrow functions testing:
  const c = 3 * Math.pow(10, -6);
  const E = [0.4225, 8.2425, 3.2452, 7.252, 9.242].map(m => m * Math.pow(c, 2));
  console.log(E);

  //12.2 Classes definitions and features:
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

  const point_A = new ColorPoint(2.145, 8.425, 'green');
  const point_B = new ColorPoint(8, 10, 'yellow');
  console.log(`Point A: ${point_A} and Point B: ${point_B}`);

  //12.3 Direct method calls:
  const new_array = ['a', 'b', 'c', 'd'];
  console.log(Object.prototype.toString.call(new_array)); 
}