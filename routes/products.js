const express = require('express');
const prodRouter = express.Router();

///PRODUCT//////////////////////////////////////////////////

    /// Inventory
    const ProductInventory = require('../db/products.js');
    const prodInv = new ProductInventory();

    //////////Products//////////
    prodRouter.get('/', (req, res) => {
        console.log('Render /products page')
        const items = prodInv.all();
        res.render('productcat', { items });
    });

    //////////NEW PRODUCT FORM//////////
    prodRouter.get('/new', (req, res) => {
        console.log('Render /products/new page')
        res.render('new');
    });

    //////////PDP//////////
    prodRouter.get('/:id', (req, res) => {
        console.log('Render /products/:id page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        console.log('Product', item);
        res.render('product', item);
    });

    //////////EDIT//////////
    prodRouter.get('/:id/edit', (req, res) => {
        console.log('Render /products/:id/edit page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        // console.log('Product', item);
        res.render('edit', item);

    });

    //////////CREATE PRODUCT//////////
    prodRouter.post('/new', (req, res) => {
        const item = req.body;
        if (item.name !== '' && item.price !== '' && item.inventory !== '') {
            prodInv.add(item);
            res.redirect('/products')  
        }
        else {
            console.log('Unknown error')
        }
    });

    //////////EDIT PRODUCT//////////
    prodRouter.put('/:id/edit', (req, res) => {
        const { id } = req.params;
        const item = prodInv.updateItemById(id, req);

        console.log('Put', item)

        res.redirect('/products') 
    });

    //////////DELETE PRODUCT//////////
    prodRouter.delete('/:id', (req, res) => {
        const { id } = req.params;
        const item = prodInv.deleteItemById(id);
        res.redirect('/products')
    });

    module.exports = prodRouter