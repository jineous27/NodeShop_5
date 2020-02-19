const express = require("express");
const router = express.Router();


// API for creating products
router.post('/', (req, res) => {
    res.json ({
        message: "The product was created"
    });
});

//API for retriving products
router.get ('/', (req, res) => {
    res.json ({
        message: "The products were retrieved"
    });
});

//API for patching products
router.patch ('/', (req, res) => {
    res.json ({
        message: "The product was patched"
    });
});

//API for deleting products
router.delete ('/', (req, res) => {
    res.json ({
        message: "The product was deleted"
    });
});




module.exports = router;