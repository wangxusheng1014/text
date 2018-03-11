const router=require('express').Router();
const url=require("url");
const async=require("async");
const db=require("mongoose");

router.get('/',(req,res,next)=>{
    var param = req.query;

    async.waterfall([
        (callback)=>{
            if(param.token){
                let m_manager = db.model("manager");
                m_manager.find({token:param.token},(err,result)=>{
                    if(result.length == 1){
                        let boo = true;
                        callback(null,{boo:boo});
                    }else{
                        let boo = false;
                        callback(null,{boo:boo});
                    }
                })
            }else{
                let boo = false;
                callback(null,{boo:boo});
            }
        },
        (prev,callback)=>{
            if(prev.boo){
                let m_linkman=db.model("linkman");
                let $where = param.keyword ? {$or:[{name: new RegExp(param.keyword)},
                                                    {remark:new RegExp(param.keyword)}]} : {};
                m_linkman.find($where,(err,result)=>{
                    if(!err){
                        callback(null,{list:result,boo:prev.boo});
                    }else{
                        callback(err,{});
                    }
                })
            }else{
                let m_linkman = db.model("linkman");
                let $where = param.keyword ? {$or:[{name: new RegExp(param.keyword)},
                                                    {remark:new RegExp(param.keyword)}]} : {};
                m_linkman.find($where,(err,result)=>{
                    if(!err){
                        callback(null,{db:prev.db,list:result,boo:prev.boo});
                    }else{
                        callback(err,{db:prev.db});
                    }
                })
            }
        }
    ],(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            if(result.boo){
                res.end(JSON.stringify({list:result.list,boo:true}));
            }else{
                res.end(JSON.stringify({list:result.list,boo:false}));
            }
        }
    })
})

module.exports=router;