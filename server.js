const express = require("express");
const app = express();


/*
app.use((req, res) => {
    res.json({
        message: 'Okay' 

    });
});

*/

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const bbsRoutes = require('./routes/bbs');


app.use('/carts', productRoutes);
app.use('/products', productRoutes);
app.use('/bbs', bbsRoutes);

const PORT = 1234;


app.listen(PORT, () => console.log("server started"));