class Inventory {
    constructor(){
        this._count = 1;
        this._storage = [];
    }
    all() {
        return [... this._storage]
        
    }
}