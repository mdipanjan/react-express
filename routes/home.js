const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Home');
});
module.exports = router;