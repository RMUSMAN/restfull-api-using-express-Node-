const express = require('express');
const app = express();
const mongoose = require('mongoose');
const profileRouter = require('./routes/profile');
const cors= require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/profile', profileRouter);
    


mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('database connected'));

app.listen(3000);