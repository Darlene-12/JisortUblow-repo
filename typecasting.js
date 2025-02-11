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
