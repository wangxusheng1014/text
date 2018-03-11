const router=require('express').Router();
const url=require("url");
const async=require("async");
const bodyParser=require("body-parser");
const db=require("mongoose");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use("/",(req,res,next)=>{
    var token=req.query.token||req.body.token;
    if(token){
        let m_manager = db.model("manager");
        m_manager.find({token:token},(err,result)=>{
            if(result.length == 1){
                next();
            }else{
                res.end(JSON.stringify({boo:false}));
                next();
            }
        })
    }else{
        res.end(JSON.stringify({boo:false}));
        next();
    }
    
})

module.exports = router;