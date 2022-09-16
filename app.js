
const port = 3000;
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const token = require('crypto').randomBytes(64).toString('hex');
const register = require('./routes/register');
const cors =require('cors');
const bodyparser= require('body-parser');
const clients = require('./routes/clients');
let conf = dotEnv.config();


app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
register(app);
clients(app);
app.get((req, res)=>{
    res.send(200,'teste');
})
app.listen(port, ()=>{
    console.log("rodando na porta 3000");
})