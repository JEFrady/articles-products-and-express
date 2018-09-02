/// App
const express = require('express');
const expressHbs = require('express-handlebars');
const PORT = process.env.PORT
const app = express();

/// Parse
const bp = require('body-parser');

/// USE
app.use(bp.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.engine('.hbs', expressHbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

///PRODUCT//////////////////////////////////////////////////

    /// Inventory
    const ProductInventory = require('./db/products.js');
    const prodInv = new ProductInventory();

    //////////HOME//////////
    app.get('/products', (req, res) => {
        const items = prodInv.all();
        console.log('Product list: ', items)
        res.render('home', { items });
    });

    //////////NEW PRODUCT FORM//////////
    app.get('/products/new', (req, res) => {
        console.log('Render /products/new')
        res.render('form');
    });

    //////////PDP//////////
    app.get('/products/:id', (req, res) => {
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        console.log('item', item);
        res.render('detail', item);
    });

    //////////EDIT//////////
    app.get('/products/:id/edit', (req, res) => {

    });

    //////////CREATE PRODUCT//////////
    app.post('/products/new', (req, res) => {
        const item = req.body;
        prodInv.add(item);
        res.redirect('/products')
    });

    //////////EDIT PRODUCT//////////
    app.put('/products:id', (req, res) => {

    });

    //////////DELETE PRODUCT//////////
    app.delete('/products/:id', (req, res) => {

    });


/// LISTEN
app.listen( PORT, () => {
    console.log(`Running on port: ${PORT}`)
});
