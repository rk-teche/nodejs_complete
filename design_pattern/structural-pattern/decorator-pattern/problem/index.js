var Shopper = require('./Shopper');
var InventoryItem = require('./InventoryItem');

var alex = new Shopper('Alex', 100);

// What if we want varitions in our inventory
var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

alex.purchase(necklace);
alex.purchase(walkman);

alex.printStatus();



/**
 * Decoractor pattern
 * It dynamically allow us to attach additional properties and method to existing objects
 * Sometimes in our application we already have base object that we need, we can decorate these things with additional methods and properties to create many custom variations of the same object
 */