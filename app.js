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

///HOME//////////////////////////////////////////////////
app.get('/', (req, res) => {
    console.log('Render home page')
    res.render('home')
})

///PRODUCT//////////////////////////////////////////////////

    /// Inventory
    const ProductInventory = require('./db/products.js');
    const prodInv = new ProductInventory();

    //////////Products//////////
    app.get('/products', (req, res) => {
        console.log('Render /products page')
        const items = prodInv.all();
        res.render('productcat', { items });
    });

    //////////NEW PRODUCT FORM//////////
    app.get('/products/new', (req, res) => {
        console.log('Render /products/new page')
        res.render('new');
    });

    //////////PDP//////////
    app.get('/products/:id', (req, res) => {
        console.log('Render /products/:id page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        console.log('Product', item);
        res.render('product', item);
    });

    //////////EDIT//////////
    app.get('/products/:id/edit', (req, res) => {
        console.log('Render /products/:id/edit page')
        const { id } = req.params;
        const item = prodInv.getItemById(id);
        // console.log('Product', item);
        res.render('edit', item);

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
        const { id } = req.params;
        const item = prodInv.updateItemById(id, req);

        console.log('Put', item)

        res.redirect('/products') 
    });

    //////////DELETE PRODUCT//////////
    app.delete('/products/:id', (req, res) => {
        const { id } = req.params;
        const item = prodInv.deleteItemById(id);
        res.redirect('/products')
    });

///ARTICLES//////////////////////////////////////////////////

    /// Inventory
    const ArticleInventory = require('./db/articles.js');
    const artInv = new ArticleInventory();

    //////////ARTICLES//////////
    app.get('/articles', (req, res) => {
        console.log('Render /articles page')
        const items = artInv.all();
        res.render('articlecat', { items });
    });

    //////////NEW ARTICLE FORM//////////
    app.get('/articles/new', (req, res) => {
        console.log('Render /articles/new page')
        res.render('newArt');
    });

    //////////ARTICLE DETAIL PAGE//////////
    app.get('/articles/:title', (req, res) => {
        console.log('Render /articles/:title page')
        const { title } = req.params;
        const item = artInv.getItemByTitle(title);
        console.log('Article', item.title);
        res.render('article', item);
    });

    //////////EDIT//////////
    app.get('/articles/:title/edit', (req, res) => {
        console.log('Render /articles/:title/edit page')
        const { title } = req.params;
        const item = artInv.getItemByTitle(title);
        // console.log('Product', item);
        res.render('editArt', item);

    });

    //////////CREATE ARTICLE//////////
    app.post('/articles/new', (req, res) => {
        const item = req.body;
        if (item.title !== '' && item.author !== '' && item.body !== '') {
            artInv.add(item);
            res.redirect('/articles')  
        }
        else {
            console.log('Unknown error')
        }
    });

    //////////EDIT PRODUCT//////////
    app.put('/articles/:title/edit', (req, res) => {
        const { title } = req.params;
        const item = artInv.updateItemByTitle(title, req);

        console.log('Put', item)

        res.redirect('/articles') 
    });

    //////////DELETE PRODUCT//////////
    app.delete('/articles/:title', (req, res) => {
        const { title } = req.params;
        // console.log(title)
        const item = artInv.deleteItemByTitle(title);
        res.redirect('/articles')
    });    



/// LISTEN
app.listen( PORT, () => {
    console.log(`Running on port: ${PORT}`)
});
