const mongoose = require("mongoose");
//定义内容文档
const manager = new mongoose.Schema({
    user_id:{type:String},
    password:{type:String},
    token:{type:String}
});
mongoose.model("manager", manager);