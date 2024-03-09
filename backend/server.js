const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));

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
app.use('/sime/api', require('./routes/main'))      
app.use('/sime/api', require('./routes/user'))      