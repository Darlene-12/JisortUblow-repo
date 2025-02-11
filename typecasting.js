// JavaScript Type Casting Demonstration

// 1. String Conversion
function demonstrateStringConversion() {
    console.log('\n=== String Conversion ===');
    
    // Explicit conversion using String()
    console.log('Explicit String conversion:');
    console.log('Number to String:', String(123));                     // "123"
    console.log('Boolean to String:', String(true));                   // "true"
    console.log('Array to String:', String([1, 2, 3]));               // "1,2,3"
    console.log('Object to String:', String({name: 'John'}));         // "[object Object]"
    console.log('Null to String:', String(null));                     // "null"
    console.log('Undefined to String:', String(undefined));           // "undefined"
    
    // Implicit conversion using + operator
    console.log('\nImplicit String conversion:');
    console.log('Number to String:', 123 + '');                       // "123"
    console.log('Boolean to String:', true + '');                     // "true"
    
    // Using toString() method
    console.log('\ntoString() method:');
    console.log('Number toString():', (123).toString());              // "123"
    console.log('Number toString(2):', (123).toString(2));           // binary
    console.log('Number toString(16):', (123).toString(16));         // hexadecimal
}

// 2. Number Conversion
function demonstrateNumberConversion() {
    console.log('\n=== Number Conversion ===');
    
    // Explicit conversion using Number()
    console.log('Explicit Number conversion:');
    console.log('String to Number:', Number('123'));                  // 123
    console.log('Boolean to Number:', Number(true));                  // 1
    console.log('Empty string to Number:', Number(''));              // 0
    console.log('Null to Number:', Number(null));                    // 0
    console.log('Undefined to Number:', Number(undefined));          // NaN
    
    // Using parseInt() and parseFloat()
    console.log('\nparseInt() and parseFloat():');
    console.log('parseInt("123.45"):', parseInt('123.45'));          // 123
    console.log('parseFloat("123.45"):', parseFloat('123.45'));      // 123.45
    console.log('parseInt("123px"):', parseInt('123px'));            // 123
    console.log('parseInt("12.34.56"):', parseInt('12.34.56'));      // 12
    
    // Implicit conversion using + operator
    console.log('\nImplicit Number conversion:');
    console.log('String to Number:', +'123');                        // 123
    console.log('Boolean to Number:', +true);                        // 1
}

// 3. Boolean Conversion
function demonstrateBooleanConversion() {
    console.log('\n=== Boolean Conversion ===');
    
    // Explicit conversion using Boolean()
    console.log('Explicit Boolean conversion:');
    console.log('Number to Boolean:', Boolean(1));                    // true
    console.log('String to Boolean:', Boolean('hello'));             // true
    console.log('Empty string to Boolean:', Boolean(''));            // false
    console.log('Zero to Boolean:', Boolean(0));                     // false
    console.log('NaN to Boolean:', Boolean(NaN));                    // false
    console.log('Null to Boolean:', Boolean(null));                  // false
    console.log('Undefined to Boolean:', Boolean(undefined));        // false
    
    // Implicit conversion using !! operator
    console.log('\nImplicit Boolean conversion:');
    console.log('Number to Boolean:', !!1);                          // true
    console.log('String to Boolean:', !!'hello');                    // true
}

// 4. Object Conversion
function demonstrateObjectConversion() {
    console.log('\n=== Object Conversion ===');
    
    // Object to primitive conversions
    const obj = {
        toString: function() { return '123' },
        valueOf: function() { return 456 }
    };
    
    console.log('Object to String:', String(obj));                   // "123"
    console.log('Object to Number:', Number(obj));                   // 456
    
    // Array conversions
    console.log('\nArray conversions:');
    console.log('Array to String:', String([1, 2, 3]));             // "1,2,3"
    console.log('Array to Number:', Number([123]));                  // 123
    console.log('Empty array to Number:', Number([]));              // 0
}

// 5. Date Conversion
function demonstrateDateConversion() {
    console.log('\n=== Date Conversion ===');
    
    const date = new Date();
    console.log('Date to Number:', Number(date));                    // timestamp in milliseconds
    console.log('Date to String:', String(date));                    // date string
    console.log('Date to ISO String:', date.toISOString());         // ISO format
}

// Run all demonstrations
function runAllDemonstrations() {
    demonstrateStringConversion();
    demonstrateNumberConversion();
    demonstrateBooleanConversion();
    demonstrateObjectConversion();
    demonstrateDateConversion();
}

// Execute the demonstrations
runAllDemonstrations();




// String Conversions
let strNum = String(123);          // "123"
let strBool = String(true);        // "true"
let strObj = String({x: 1});       // "[object Object]"
let strArr = String([1,2,3]);      // "1,2,3"
let strToString = "" + 123;        // "123"
let strTemplate = `${123}`;        // "123"

// Number Conversions
let numStr = Number("123");        // 123
let numBool = Number(true);        // 1
let numNull = Number(null);        // 0
let numUndef = Number(undefined);  // NaN
let numPlus = +"123";             // 123
let numInt = parseInt("123.45");   // 123
let numFloat = parseFloat("123.45"); // 123.45
let numDate = Number(new Date());  // timestamp

// Boolean Conversions
let boolStr = Boolean("hello");     // true
let boolEmptyStr = Boolean("");     // false
let boolNum = Boolean(123);         // true
let boolZero = Boolean(0);          // false
let boolObj = Boolean({});          // true
let boolNull = Boolean(null);       // false
let boolUndef = Boolean(undefined); // false
let boolNot = !!"hello";           // true

// Object Conversions
let objFromStr = Object("hello");   // String {"hello"}
let objFromNum = Object(123);       // Number {123}
let objFromBool = Object(true);     // Boolean {true}

// Array Conversions
let arrFromStr = Array.from("hello");     // ["h","e","l","l","o"]
let arrSplit = "1,2,3".split(",");        // ["1","2","3"]
let arrSpread = [...new Set([1,2,3])];    // [1,2,3]

// BigInt Conversions
let bigFromNum = BigInt(123);             // 123n
let bigFromStr = BigInt("123");           // 123n

// Symbol Conversions
let symFromStr = Symbol("hello");          // Symbol(hello)
let symDesc = Symbol("hello").description; // "hello"

// Date Conversions
let dateFromStr = new Date("2024-02-11");  // Date object
let dateToNum = dateFromStr.getTime();     // timestamp
let dateToStr = dateFromStr.toISOString(); // "2024-02-11T00:00:00.000Z"

// Bitwise Conversions
let bitInt = ~~"123.45";                   // 123
let bitBool = ~~true;                      // 1
let bitFloat = ~~3.99;                     // 3

// Binary, Octal, Hex Conversions
let binNum = parseInt("1010", 2);          // 10
let octNum = parseInt("12", 8);            // 10
let hexNum = parseInt("A", 16);            // 10

// Type Coercion Examples
let coerceAdd = 5 + "5";                   // "55"
let coerceSub = "5" - 2;                   // 3
let coerceMult = "5" * "2";                // 10
let coerceDiv = "10" / "2";                // 5
let coerceCompare = "5" == 5;              // true
let coerceStrict = "5" === 5;              // false

// Array to Primitive Conversions
let arrToStr = [1,2,3].toString();         // "1,2,3"
let arrJoin = [1,2,3].join("-");           // "1-2-3"
let arrValues = Array.from("123", Number);  // [1,2,3]
