var Person = require('./Person')

/**
 * It called `telescoping constructor` - we don't know what `true true` means in constructor
 * It has too many arguments and it become confusing
 */

// Employees
var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

// Shoppers
var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
var tabbitha = new Person('Tabbitha', false, false, 0, 1000);
