require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const routes = require('./routes/routes');

const app = express();

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser : true, 
    useUnifiedTopology : true}).then(()=>{
        console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.use('/',routes);

app.listen(PORT,function(){
    console.log(`Listening to port ${PORT}`);
});

