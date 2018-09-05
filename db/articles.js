class ArticleInventory {
    constructor(){
        this._count = 3;
        this._storage = [
            {title: 'Selling oranges', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta pretium ipsum ut pretium. Aliquam aliquet tincidunt cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi posuere aliquam fringilla. Nullam eu mauris varius, rutrum lectus et, sagittis mauris. Sed in lacus ac magna faucibus ultrices id at erat. Phasellus pulvinar sed nisi eu volutpat. Curabitur interdum, lacus sed hendrerit imperdiet, erat risus fermentum magna, vitae molestie nisi leo iaculis odio. Phasellus vitae lacus metus. Pellentesque non faucibus neque. Sed commodo magna risus, vel sodales nunc fermentum vel. Nam mattis aliquam nisl non sodales.Proin tempus diam ac fermentum finibus. Etiam lacinia arcu quis justo porttitor scelerisque. Suspendisse laoreet maximus sapien. In hac habitasse platea dictumst. Donec sed mollis metus, id viverra arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec neque nibh, condimentum vitae dapibus sed, mollis in ipsum. Sed efficitur volutpat turpis nec vestibulum. Curabitur eleifend sit amet odio non pharetra. Phasellus egestas vestibulum sollicitudin. Donec ornare tempor tortor, vel ultrices dui efficitur id.', author: 'Bob the fruit guy', urlTitle: 'TBD', id: 1}, 
            {title: 'The life of a shop owner', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta pretium ipsum ut pretium. Aliquam aliquet tincidunt cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi posuere aliquam fringilla. Nullam eu mauris varius, rutrum lectus et, sagittis mauris. Sed in lacus ac magna faucibus ultrices id at erat. Phasellus pulvinar sed nisi eu volutpat. Curabitur interdum, lacus sed hendrerit imperdiet, erat risus fermentum magna, vitae molestie nisi leo iaculis odio. Phasellus vitae lacus metus. Pellentesque non faucibus neque. Sed commodo magna risus, vel sodales nunc fermentum vel. Nam mattis aliquam nisl non sodales.Proin tempus diam ac fermentum finibus. Etiam lacinia arcu quis justo porttitor scelerisque. Suspendisse laoreet maximus sapien. In hac habitasse platea dictumst. Donec sed mollis metus, id viverra arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec neque nibh, condimentum vitae dapibus sed, mollis in ipsum. Sed efficitur volutpat turpis nec vestibulum. Curabitur eleifend sit amet odio non pharetra. Phasellus egestas vestibulum sollicitudin. Donec ornare tempor tortor, vel ultrices dui efficitur id.', author: 'Sally the Store Owner', urlTitle: 'TBD', id: 2}];
    }
    all() {
        return [... this._storage]
        
    }
    getItemByTitle(title) {
        let article = this._storage.filter(item => title == item.title);
        if (article.length > 0) {
            return article[0]
        }
    }
    add(item) {
        item.id = this._count;
        this._storage.push(item);
        this._count++;
        return item.id;
    }
    updateItemByTitle(title, req) {
        let temp = this._storage.filter(item => title == item.title);
        let article = temp[0]
        article.title = req.body.title
        article.author = req.body.author
        article.body = req.body.body

        return article
    }
    deleteItemByTitle(title) {
        let storage = this._storage
        let article = this._storage.filter(item => title == item.title);
        for(let i=0; i<storage.length; i++){
            if (storage[i].title == title) {  
                storage.splice(i, 1)
                return storage
            }
        }

    }
}
module.exports = ArticleInventory;