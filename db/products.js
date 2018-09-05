class ProductInventory {
    constructor() {
        this._count = 4;
        this._storage = [{name: 'Orange', price: '.33', inventory: '333', id: 1}, {name: 'Apple', price: '.25', inventory: '500', id: 2}, {name: 'Banana', price: '.10', inventory: '600', id: 3}];
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
    updateItemById(id, req) {
        let temp = this._storage.filter(item => id == item.id);
        let product = temp[0]
        product.name = req.body.name
        product.price = req.body.price
        product.inventory = req.body.inventory

        return product
    }
    deleteItemById(id) {
        let storage = this._storage
        let product = this._storage.filter(item => id == item.id);
        for(let i=0; i<storage.length; i++){
            if (storage[i].id == id) {  
                console.log('Delete', product[0].name)
                storage.splice(i, 1)
                return storage
            }
        }

    }
}
module.exports = ProductInventory;