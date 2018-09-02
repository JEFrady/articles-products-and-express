class ProductInventory {
    constructor() {
        this._count = 2;
        this._storage = [{name: 'Orange', price: '.33', inventory: '333', id: 1}];
    }
    all() {
        return [... this._storage];
    }
    getItemById(id) {
        // console.log(id)
        // console.log(this._storage)
        let product = this._storage.filter(item => id == item.id);
        if (product.length > 0) {
            return product[0]
        }

    }
    add(item) {
        item.id = this._count;
        this._storage.push(item);
        this._count++;
        return item.id;
    }
    updateItemById(id) {



    }
    deleteItemById(id) {

    }
}
module.exports = ProductInventory;