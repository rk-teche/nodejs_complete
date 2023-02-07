var PersonBuilder = require('./PersonBuilder');

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManger(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
var charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();


/**
 * we use builder pattern when we want to customize instances of the objects that you will create
 * Sepcifically when we need to break down the complex object into separate concerns
 * It seperates the construction of the complex object from its representation, so same construction process can create different representations
 * 
 * It solves the anti-pattern `Telescoping Constructor`
 */