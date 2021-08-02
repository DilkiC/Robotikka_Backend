const UserSchema=require('../models/UserSchema');
const registerUser=(req,resp)=>{
    const user=new UserSchema({
        fName:req.body.fName,
        lName:req.body.lName,
        email:req.body.email,
        password:req.body.password,
        avatar:req.body.avatar,
        userState:req.body.userState,
        regDate:req.body.regDate,
        regTime:req.body.regTime,

    });
    user.save().then(savedResponse=>{
        resp.status(200).json({message:'Success',state:true})
    }).catch(savedResponseError=>{
        resp.status(500).json({message: 'internel server error',state: false,error:savedResponseError})
    })

};
module.exports={registerUser}