const express = require('express')
const app = express();

const authRoute = require('./routes')
const verify=  require('./verifytoke')
var mongoose = require('mongoose');
var bodyparser = require('body-parser')
const cors = require('cors')
var path = require('path')
const dontenv = require('dotenv');
dontenv.config();
app.use(bodyparser.json())
mongoose.connect(process.env.dbconnect, {useNewUrlParser: true,useUnifiedTopology: true});
var urlencodedParser = bodyparser.urlencoded({ extended: false })
mongoose.connection.on('connected',()=>{
    console.log('connected to databaseat at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    } 
})
app.use("/api/user",verify)
app.use('/api/user',authRoute)

app.listen(3044,() => console.log('server is running on 3044'));
module.exports = app