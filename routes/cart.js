const express = require("express");
const router = express.Router();

//API for creating items in cart
router.post('/', (req, res) => {
    res.json({
        message: "Products were added to the cart"
    });
});

//API for getting items in cart
router.get('/', (req, res) => {
    res.json({
        message: "Products were listed"
    });
});

//API for updating items in cart
router.patch('/', (req, res) => {
    res.json({
        message: "Products are patched"
    });
});

//API for deleting items in cart
router.delete('/', (req, res) => {
    res.json({
        message: "Products were deleted"
    });
});



module.exports = router;