const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express(morgan('tiny'));
const home = require('./routes/home');

app.use('/', home)


const port = process.env.PORT || 8000 ;
app.listen(port, ()=>{
    console.log(`server started at port ${port} ` )
})