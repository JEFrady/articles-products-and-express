class ProductInventory {
    constructor() {
        this._count = 1;
        this._storage = [];
    }
    all() {
        return [... this._storage];
    }
    getItemById(id) {
        console.log(id)
        console.log(this._storage)
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