const express=require("express");
const http=require("http");
const app=express(); 
const mongoose=require("mongoose");
var server=http.createServer(app);

const db_connstr = 'mongodb://127.0.0.1:27017/c4_phonebook';
mongoose.connect(db_connstr, {useMongoClient:true} );
require('./src/db_models/manager');
require('./src/db_models/linkman');

app.use(express.static(`${__dirname}/public/`))

const list=require("./src/list");
const create=require("./src/create");
const user=require("./src/user");
const remove=require("./src/remove");
const update=require("./src/update");
const checktoken=require("./src/checktoken");

// app.use(function(req,res,next){
//     var err = new Error('NOT FOUND');
//     err.static = 404;
//     next(err);
// })


app.use("/list",list);
app.use("/user",user);
app.use("*",checktoken);
app.use("/create",create);
app.use("/remove",remove);
app.use("/update",update)

console.log("ok");
server.listen(3002,(err)=>{
    if(err){
        throw err;
    }else{
        console.log("start on 3000");
    }
})

