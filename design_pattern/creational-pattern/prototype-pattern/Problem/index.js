var Shopper = require('./Shopper');

/**
 * Both `alex` and `eve` are essentially the same list so the process of setting up each shopper require that we duplicate the same code
 * 
 * We can reduce this redundancy from `Prototype Pattern` - move to Solution folder of prototype pattern for implementation
 */

var alex = new Shopper('Alex Banks');
alex.addItemToList('camping knife');
alex.addItemToList('tent');
alex.addItemToList('backpack');
alex.addItemToList('map');
alex.addItemToList('slingshot');

var eve = new Shopper('Eve Porcello');
eve.addItemToList('camping knife');
eve.addItemToList('tent');
eve.addItemToList('backpack');
eve.addItemToList('map');
eve.addItemToList('reading light');

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
