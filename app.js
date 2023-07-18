const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log('Server en '+port+' OK')});
app.use(express.static('public'));
app.get('/',(req,res) => {res.sendFile(path.join(__dirname,'/views/home.html'))});

