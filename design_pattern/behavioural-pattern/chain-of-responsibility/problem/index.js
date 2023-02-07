var Store = require('./Store');
var inventory = require('./inventory.json');

var skiShop = new Store('Steep and Deep', inventory.floor);

var searchItem = 'ski hats';
var results = skiShop.find(searchItem);

console.log( results );

/**
 * Chain of responsiblity design pattern
 * This pattern allows us to chain together objects to handle a request
 * A request is sent to an object to handle it and then the handler could process the request and return a result, or it could pass the request to another handler
 */