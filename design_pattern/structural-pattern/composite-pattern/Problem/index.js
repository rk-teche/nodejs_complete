var CatalogItem = require('./CatalogItem');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

console.log( 'boots total: ', `$${boots.total}` );

boots.print();
sneakers.print();



/**
 * Composite pattern -
 * Composites work with trees, when it comes to programming - tree are everywhere i.e. one of the most common tree are file system tree
 * If we travers the file system we will end with node which do not contain any other node or group, these nodes are refer to as leaf nodes
 * In file system -> each file would represent a leaf
 * 
 * So Composite design pattern organize your objects in a way that treats leaves and branches uniformly
 * 
 * "Compose object into tree structures to represent part-whole hierarchies. Composite lets clients treat individual object and compositions of object uniformly"
 * 
 * 
 */