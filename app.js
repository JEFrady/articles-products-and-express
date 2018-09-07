/// App
const express = require('express');
const expressHbs = require('express-handlebars');
const PORT = process.env.PORT || 5000
const app = express();
const methOver = require('method-override');

const artRoute = require('./routes/articles.js')
const prodRoute = require('./routes/products.js')

/// Parse
const bp = require('body-parser');

/// USE
app.use(bp.urlencoded({ extended: true }));
app.use(methOver('_method'));
app.use('/products', prodRoute);
app.use('/articles', artRoute)

// app.use(express.static('public'));
app.engine('.hbs', expressHbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

///HOME//////////////////////////////////////////////////
app.get('/', (req, res) => {
    console.log('Render home page')
    res.render('home')
})


/// LISTEN
app.listen( PORT, () => {
    console.log(`Running on port: ${PORT}`)
});
