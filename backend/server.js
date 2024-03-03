const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI).then((conn)=>{

    console.log('Connected to DB: ' + conn.connection.host);
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on: ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log('Connection Failed: ' + error);
});


//middleware to parse the request body 
app.use(express.json()); 

// Middleware to parse form-data
app.use(express.urlencoded({extended:true}));
 
//handling routes
app.use(require('./routes/main'))      