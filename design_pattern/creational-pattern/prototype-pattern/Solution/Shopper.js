class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

      
    // It allows us to use protoype pattern, when we create new shoppers of the Scout prototype
    clone(){
        let proto = Object.getPrototypeOf(this)
        let cloned = Object.create(proto)

        cloned._name = this._name
        cloned._shoppingList = [...this._shoppingList]

        return cloned;
    }

}

module.exports = Shopper;
