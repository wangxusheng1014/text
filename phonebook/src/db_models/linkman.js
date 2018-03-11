const mongoose = require("mongoose");
//定义内容文档
const linkman = new mongoose.Schema({
    name : {type:String},
    phone : {type:Number},
    mobile : {type:Number},
    weichatUrl : {type:String},
    remark : {type:String}
});
mongoose.model("linkman", linkman);



