const router=require('express').Router();
const url=require("url");
const async=require("async");
const bodyParser=require("body-parser"); 
const uuid=require("uuid");
const fetch=require('isomorphic-fetch');
const db=require("mongoose");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post("/login",(req,res,next) => {
    
    var post = req.body;
    let m_manager = db.model("manager");
    let $where ={user_id:post.user_id,password:post.password};
    //启用async组件前必须在文件开头引入
    //此处开始使用async组件的waterfall方法（串行依赖方法）
    async.waterfall(
    //waterfall的第一个参数必须是数组，数组里必须是带有callback的函数
    [
        //串行执行的第一个函数，此函数是用来到数据库匹配前端传来的用户名密码，并设定了
        //一个boolean值boo，以便调用callback的时候向下一个函数传递信息。
        (callback)=>{
            m_manager.find($where,(err, result) => {                           
                if(result.length!=0 && !err){
                    var boo = true;
                    callback(null,boo);
                }else{
                    var boo = false;
                    callback(null,boo);
                }
            });              
        },
        //串行执行的第二个函数，此函数会接到上一个函数传下来的boo（因为没发生错误），
        //如果boo是true(在数据库中匹配到用户名密码)，则用uuid生成一个token放入数据库并向下传递，
        //如果boo是false(未在数据库中匹配到用户名密码)，则给token赋值401并向下传递。
        (boo,callback)=>{
            if(boo){
                let token=uuid();
                m_manager.update({user_id:post.user_id},
                    { $set: { token: token} },
                    (error)=>{
                        if(!error){
                            callback(null,{token:token,boo:boo});
                        }else{
                            callback(error,{token:token,boo:boo})
                        }
                    }
                );
            }else{
                var token = 401;
                callback(null,{token:token,boo:boo});
            } 
        },
        (prev,callback)=>{
            async function getData (){
                var data = await fetch("http://localhost:3000/list",{
                    method:"get",
                    head:{
                        'Content-Type':'application/json'
                    },
                    data:{
                        keyword: "",
                        token:prev.token
                    }
                })
                var list = await data.json();
                if(prev.boo){                            
                    callback(null,{list:list,token:prev.token,boo:prev.boo})
                }else{
                    callback(null,{token:prev.token,boo:prev.boo});
                }  
            }
            getData();
        }
    ],
    //waterfall方法的第二个参数：一个接收上述串行函数执行中出现的错误(err)和传下来的参数(token)的回调函数;
    //如果出现错误，那么在控制台输出错误的信息，如果没出错误，就将token转成字符串返给客户端。
    (err,prev)=>{
        if(!err){
            res.end(JSON.stringify({token:prev.token,list:prev.list,boo:prev.boo}));
        }else{
            console.log(err.message);
        }
    })
})

module.exports=router;