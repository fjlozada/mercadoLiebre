const express = require('express');
const path = require('path');
const app = express()
app.listen(3000, () => {console.log('Server en 3000 OK')});
app.use(express.static('public'));
app.get('/',(req,res) => {res.sendFile(path.join(__dirname,'/views/home.html'))});

