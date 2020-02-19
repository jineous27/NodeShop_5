const express = require("express");
const router = express.Router();

//API for posting contents
router.post('/', (req, res) => {
    res.json({
        message: "The contents were posted"
    });
});

//API for getting contents
router.get('/', (req, res) => {
    res.json({
        message: "The contents were retrieved"
    });
});

//API for patching contents 
router.patch('/', (req, res) => {
    res.json ({
        message: "The contents were patched"
    });
});

//API for deleting contents
router.delete('/', (req, res) => {
    res.json({
        message: "The Contents were deleted"
    });
});




module.exports = router;