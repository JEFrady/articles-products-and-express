/// App
const express = require('express');
const expressHbs = require('express-handlebars');
const PORT = process.env.PORT
const app = express();
const methOver = require('method-override');

/// Parse
const bp = require('body-parser');

/// USE
app.use(bp.urlencoded({ extended: true }));
app.use(methOver('_method'));

// app.use(express.static('public'));
app.engine('.hbs', expressHbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

///PRODUCT//////////////////////////////////////////////////

    /// Inventory
    const ProductInventory = require('./db/products.js');
    const prodInv = new ProductInventory();

    //////////HOME//////////
    app.get('/products', (req, res) => {
        console.log('Render /products page')
        const items = prodInv.all();
        res.render('home', { items });
    });

    //////////NEW PRODUCT FORM//////////
    app.get('/products/new', (req, res) => {
        console.log('Render /products/new page')
        res.render('form');
    });

    //////////PDP//////////
    app.get('/products/:id', (req, res) => {
        console.log('Render /products/:id page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        // console.log('Product', item);
        res.render('detail', item);
    });

    //////////EDIT//////////
    app.get('/products/:id/edit', (req, res) => {
        console.log('Render /products/:id/edit page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        // console.log('Product', item);
        res.render('editform', item);

    });

    //////////CREATE PRODUCT//////////
    app.post('/products/new', (req, res) => {
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
    app.put('/products/:id/edit', (req, res) => {
        console.log('Put', req.body)

    });

    //////////DELETE PRODUCT//////////
    app.delete('/products/:id', (req, res) => {

    });


/// LISTEN
app.listen( PORT, () => {
    console.log(`Running on port: ${PORT}`)
});
