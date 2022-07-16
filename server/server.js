const express = require('express');
const bodyParser = require('body-parser');
const routeHandler = require('./routes/handler.js')

const app = express();
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',routeHandler)

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log('Server is running on port 5000');
})